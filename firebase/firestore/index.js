import {getApp} from 'firebase/app';
import {collection, addDoc, getFirestore} from 'firebase/firestore/lite';

/**
 * Function to add a new document to the collection.
 * @async
 * @function add
 * @param {string} collectionName
 * @param {object} data
 * @return {boolean}
 * @example add('users', {name: 'John Doe', age: 30});
 */
async function add(collectionName = '', data = {}) {
  const app = getApp();
  const firestore = getFirestore(app);
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(firestore, collectionName), data);
  // console.log('Document written with ID: ', docRef.id);
  return !!docRef?.id;
}

export {add};
