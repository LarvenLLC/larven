import {add} from '.';

const collectionName = 'contacts';

/**
 * Function to add a new contact document.
 * @function addContact
 * @param {object} data
 * @return {Function}
 * @example addContact({name: 'John Doe', age: 30});
 */
const addContact = (data = {}) => add(collectionName, data);

export {addContact};
