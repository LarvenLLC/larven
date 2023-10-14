import { getApps } from 'firebase/app';
import {
  getFirestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs,
  orderBy as orderByFn, query, setDoc, serverTimestamp, where, writeBatch, CollectionReference, DocumentData, OrderByDirection, DocumentReference,
} from 'firebase/firestore';

import { blameUpdate, blammable, getCurrentUser } from '@/lib/firebase/auth';

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
export function collectionRef(collectionName: string): CollectionReference | undefined {
  if (apps.length) {
    const db = getFirestore();

    const res = collection(db, collectionName);
    return res;
  }
}

/**
 * Get firestore document reference
 * @param {string} collectionName
 * @param {string} id
 * @returns
 */
export function docRef(collectionName: string, id: string): DocumentReference | undefined {
  if (apps.length) {
    const db = getFirestore();
    // const auth = getAuth();
    // auth.currentUser.uid

    const reference = doc(db, collectionName, id);
    return reference;
  }
}

// export function collectionSubscribe(collectionName: string, options?: { orderBy: string[] }) {
//   const [fieldPath, directionStr] = options?.orderBy ?? ['createdAt', 'desc'];
//   if (apps.length) {
//     let res: [] = [];
//     const unsubscribe = (collectionRef(collectionName) as CollectionReference)
//       .orderBy(fieldPath, directionStr)
//       .onSnapshot((querySnapshot) => {
//         res = querySnapshot.docs;
//       });
//     return [res, unsubscribe];
//   }
//   return false;
// }

export async function getDocuments(
  collectionName: string,
  whereBy: { field: string, operation: '=='|'!=', value: string }[] = [],
  orderBy: { field: string, direction: OrderByDirection } = { field: 'createdAt', direction: 'desc' },
) {
  const data: DocumentData[] = [];
  if (apps.length) {
    const queries = [];

    whereBy.forEach(({ field: fieldPath, operation = '==', value: fieldValue }) => {
      queries.push(where(fieldPath, operation, fieldValue));
    });
    queries.push(orderByFn(orderBy.field, orderBy.direction));

    const snapshot = await getDocs(query((collectionRef(collectionName) as CollectionReference), ...queries));

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
    const res = await getDoc((docRef(collectionName, id) as DocumentReference));
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
    };
    const res = await addDoc((collectionRef(collectionName) as CollectionReference), blammable(formData));
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
    };
    const res = await setDoc((docRef(collectionName, documentName) as DocumentReference), blameUpdate(formData));
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
    forms.forEach((form: object) => {
      const reference = doc((collectionRef(collectionName) as CollectionReference));
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
    const res = await deleteDoc((docRef(collectionName, id) as DocumentReference));
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
      const reference = docRef(collectionName, id) as DocumentReference;
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

    const res = await setDoc((docRef(collectionName, id) as DocumentReference), formData, { merge: true });
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
      const reference = docRef(collectionName, id) as DocumentReference;
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

export function unsubscribeCollection(u: any) { return u; }
