import nookies from 'nookies';
import { useRouter } from 'next/navigation';
import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { app } from '@/firebase';
import {
  getAuth, getIdTokenResult, onIdTokenChanged,
  onAuthStateChanged as onAuthStateChangedControl,
  signOut as signOutControl,
  signInAnonymously,
  getCurrentUser
} from 'firebase/auth';
/**
 * Firebase user
 * @typedef { import("firebase/auth").User } User
 */

/**
 * @param {
 * Context<{user: User|null, onAuthStateChanged: function(callback: any), signOut: function()}>
 * } AuthContext
 */
const AuthContext = createContext({
  user: null,
  onAuthStateChanged: (callback) => { },
  signOut: () => { },
});

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
export default function AuthProvider({ children }) {
  const router = useRouter();

  const [currentUser, setUser] = useState(null);

  // listen for token changes
  // call setUser and write new token as a cookie
  const onAuthStateChanged = useCallback((callback) => onAuthStateChangedControl(async (user) => {
    if (user) {
      const userObject = user;
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
      const userObject = user;
      userObject.role = claims?.role;
      setUser(userObject);
      nookies.set(undefined, 'token', token, { path: '/' });
      if (router?.pathname === '/login') {
        router.replace('/admin');
      }
    }
  }), [router]);

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
    router.reload();
  }, [router]);

  const value = useMemo(() => ({
    user: currentUser,
    onAuthStateChanged,
    signOut,
  }), [currentUser, onAuthStateChanged, signOut]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
