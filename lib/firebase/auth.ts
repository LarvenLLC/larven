import { getApps } from 'firebase/app';
import {
  User,
  getAuth, onAuthStateChanged as onAuthStateChangedController,
  signInAnonymously as signInAnonymouslyController,
  signInWithEmailAndPassword as signInWithEmailAndPasswordController, signOut as signOutController,
} from 'firebase/auth';

// initialized firebase apps
// export const app = getApp();
export const apps = getApps();

// if (
//   typeof window !== "undefined" &&
//   window?.location?.hostname === "localhost"
// ) {
//   db.useEmulator("localhost", 8080);
//   auth.useEmulator("http://localhost:9099");
// }

export async function getToken() {
  if (apps.length) {
    const auth = getAuth();
    const res = await auth.currentUser?.getIdToken();
    return res;
  }
  return false;
}

export function onAuthStateChanged(setUser: (user: User|null) => Promise<void>, onError?: (error: Error) => Promise<void>) {
  if (apps.length) {
    const auth = getAuth();
    const res = onAuthStateChangedController(auth,
      (user) => {
        setUser(user);
      },
      (error) => {
        if (typeof onError === 'function') {
          onError(error);
        }
      },
    );
    return res;
  }
}

export async function signInAnonymously() {
  if (apps.length) {
    const auth = getAuth();
    const res = await signInAnonymouslyController(auth);
    return res;
  }
  return false;
}

export async function signInWithEmailAndPassword(email = '', password = '') {
  if (apps.length) {
    const auth = getAuth();
    const res = await signInWithEmailAndPasswordController(auth, email, password);
    return res;
  }
  return false;
}

export function signOut() {
  if (apps.length) {
    const auth = getAuth();
    return signOutController(auth);
  }
  return false;
}

export function getCurrentUser() {
  if (apps.length) {
    const auth = getAuth();
    const res = auth.currentUser;
    return res;
  }
  return false;
}
