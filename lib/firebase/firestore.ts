import { getApps } from 'firebase/app';
import {
  getFirestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs,
  orderBy as orderByFn, query, setDoc, serverTimestamp, where, writeBatch,
} from 'firebase/firestore';

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

/**
 * Get firestore collection reference
 * @param {string} collectionName
 * @param {string} subcollections
 * @returns
 */
export function collectionRef(collectionName = '') {
  if (apps.length) {
    const db = getFirestore();

    const res = collection(db, collectionName);
    return res;
  }
  return false;
}

/**
 * Get firestore document reference
 * @param {string} collectionName
 * @param {string} id
 * @returns
 */
export function docRef(collectionName: string, id: string) {
  if (apps.length) {
    const db = getFirestore();
    // const auth = getAuth();
    // auth.currentUser.uid

    const reference = doc(db, collectionName, id);
    return reference;
  }
}

export function collectionSubscribe(collectionName: string, options) {
  const [fieldPath, directionStr] = options?.orderBy ?? ['createdAt', 'desc'];
  if (apps.length) {
    let res = [];
    const unsubscribe = collectionRef(collectionName)
      .orderBy(fieldPath, directionStr)
      .onSnapshot((querySnapshot) => {
        res = querySnapshot.docs;
      });
    return [res, unsubscribe];
  }
  return false;
}

export async function getDocuments(
  collectionName = '',
  whereBy = [],
  orderBy = { field: 'createdAt', direction: 'desc' },
) {
  const data = [];
  if (apps.length) {
    const queries = [];

    whereBy.forEach(({ field: fieldPath, operation = '==', value: fieldValue }) => {
      queries.push(where(fieldPath, operation, fieldValue));
    });
    queries.push(orderByFn(orderBy.field, orderBy.direction));

    const snapshot = await getDocs(query(collectionRef(collectionName), ...queries));

    snapshot.forEach((document) => {
      // doc.data() is never undefined for query doc snapshots
      const object = document.data();
      object.id = document.id;
      data.push(object);
    });

    return data;
  }
  return false;
}

export async function getDocument(collectionName: string, id: string) {
  if (apps.length) {
    const res = await getDoc(docRef(collectionName, id));
    return res?.data();
  }
  return false;
}

export async function addDocument(collectionName: string, form = {}, createdAt = new Date()) {
  if (apps.length) {
    const formData = {
      ...form,
      createdAt,
      updatedAt: createdAt,
      createdBy: getCurrentUser()?.uid,
    };
    const res = await addDoc(collectionRef(collectionName), blammable(formData));
    return res;
  }
  return false;
}

export async function putDocument(collectionName: string, documentName: string, form = {}, createdAt = new Date()) {
  if (apps.length) {
    const formData = {
      ...form,
      createdAt,
      updatedAt: createdAt,
      createdBy: getCurrentUser()?.uid,
    };
    const res = await setDoc(docRef(collectionName, documentName), blameUpdate(formData));
    return res;
  }
  return false;
}

export async function addDocuments(collectionName = '', forms = []) {
  if (apps.length) {
    const db = getFirestore();
    // Get a new write batch
    const batch = writeBatch(db);
    const currentUser = getCurrentUser();
    //
    forms.forEach((form) => {
      const reference = doc(collectionRef(collectionName));
      batch.set(reference, {
        ...form,
        createdAt: new Date(),
        updatedAt: null,
        createdBy: currentUser?.uid,
      });
    });
    // Commit the batch
    const res = await batch.commit();
    return res;
  }
  return false;
}

export async function deleteDocument(collectionName: string, id: string) {
  if (apps.length) {
    const res = await deleteDoc(docRef(collectionName, id));
    return res;
  }
  return false;
}

export async function deleteDocuments(collectionName: string, ids: string[]) {
  if (apps.length) {
    const db = getFirestore();
    // Get a new write batch
    const batch = writeBatch(db);
    //
    ids.forEach((id) => {
      const reference = docRef(collectionName, id);
      batch.delete(reference);
    });
    // Commit the batch
    const res = await batch.commit();
    return res;
  }
  return false;
}

export async function updateDocument(collectionName: string, id: string, form = {}) {
  if (apps.length) {
    const formData = {
      ...form,
      updatedAt: new Date(),
    };

    const res = await setDoc(docRef(collectionName, id), formData, { merge: true });
    return res;
  }
  return false;
}

export async function updateDocuments(collectionName: string, ids: string[], form = {}) {
  if (apps.length) {
    const db = getFirestore();
    // Get a new write batch
    const batch = writeBatch(db);
    //
    ids.forEach((id) => {
      const reference = docRef(collectionName, id);
      batch.update(reference, {
        ...form,
        updatedAt: serverTimestamp(),
      });
    });
    // Commit the batch
    const res = await batch.commit();
    return res;
  }
  return false;
}

export function unsubscribeCollection(u) { return u; }
