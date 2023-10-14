import nookies from 'nookies';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import {User as AuthUser, Unsubscribe, getAuth, getIdTokenResult, onIdTokenChanged} from 'firebase/auth';

import { app } from '@/lib/firebase';
import {
  onAuthStateChanged as onAuthStateChangedControl,
  signOut as signOutControl,
  signInAnonymously,
  getCurrentUser
} from '@/lib/firebase/auth';

/**
 * Firebase user
 * @typedef {import("firebase/auth").User} User
 */

interface User extends AuthUser {
  role?: string|any;
}

type AuthContextType = {
  user: User | null;
  onAuthStateChanged: (callback: (user: User) => void) => Unsubscribe | undefined;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  onAuthStateChanged: () => undefined,
  signOut: () => {},
});
AuthContext.displayName = 'AuthContext';

/**
 * @function useAuth
 * @returns {{user: User|null, onAuthStateChanged: function()}}
 */
export const useAuth = () => useContext(AuthContext);

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ProviderProps<{user: User}>}
 */
export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const pathname = usePathname();
  const { refresh, replace } = useRouter();

  const [currentUser, setUser] = useState<null|User>(null);

  // listen for token changes
  // call setUser and write new token as a cookie
  const onAuthStateChanged = useCallback((callback: (user: User) => void) => onAuthStateChangedControl(async (user: AuthUser|null) => {
    if (user) {
      const userObject: User = user;
      console.log("user present")
      if (callback && typeof callback === 'function') {
        const { claims } = await user.getIdTokenResult();
        userObject.role = claims?.role;
        callback(userObject);
      }
    } else {
      // user not signed in
      signInAnonymously().then(() => {
        console.log("User signing in")
      })
    }
  }), []);

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => onIdTokenChanged(getAuth(app), async (user) => {
    if (!user) {
      setUser(null);
      nookies.set(undefined, 'token', '', { path: '/' });
    } else {
      const { token, claims } = await getIdTokenResult(user);
      const userObject: User = user;
      userObject.role = claims?.role;
      setUser(userObject);
      nookies.set(undefined, 'token', token, { path: '/' });
      if (pathname === '/login') {
        replace('/admin');
      }
    }
  }), [pathname, replace]);

  // force refresh the token every 60 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = getCurrentUser();
      if (user) await user.getIdToken(true);
    }, 60 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  const signOut = useCallback(() => {
    signOutControl();
    refresh();
  }, [refresh]);

  const value = useMemo(() => ({
    user: currentUser,
    onAuthStateChanged,
    signOut,
  }), [currentUser, onAuthStateChanged, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
