import contacts from './data.js';

export const findContact = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    // [1, 'Carol', 'Carolson', '073', ... , []]
    const values = Object.values(contact).filter((part) => {
      return typeof part === 'number' || typeof part === 'string';
    });

    needle = needle.toLowerCase();

    if (values.join('').toLowerCase().includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const deleteContact = (contactId) => {
  contactId = parseInt(contactId);
  if (!contactId || isNaN(contactId)) {
    return;
  }

  const contactIndex = contacts.findIndex((contact) => {
    const { id } = contact;

    return contactId === id;
  });

  if (contactIndex >= 0) {
    // splice mutates
    contacts.splice(contactIndex, 1);
  }
};

// add contact
export const addContact = (contact) => {
  // push mutates
  contacts.push(contact);
};

// get contact (by id)
export const getContact = (contactId) => {
  contactId = Number(contactId);

  return contacts.find((contact) => {
    const { id } = contact;

    return id === contactId;
  });
};

// editContact
export const editContact = (contact) => {
  const existingContact = getContact(contact.id);

  const contactProperties = Object.keys(existingContact);

  for (let i = 0; i < contactProperties.length; i++) {
    const propertyName = contactProperties[i];

    existingContact[propertyName] =
      contact[propertyName] || existingContact[propertyName];
  }
};

// addPet
export const addPet = (contactId, pet) => {
  const contact = getContact(contactId);
  contact.pets = contact.pets || [];

  // push mutates
  contact.pets.push(pet);
};

//deletePet
export const deletePet = (contactId, petId) => {
  contactId = Number(contactId);
  petId = Number(petId);

  if (isNaN(contactId) || isNaN(petId)) {
    return;
  }

  const contactIndex = contacts.findIndex((contact) => {
    const { id } = contact;

    return contactId === id;
  });

  if (contactIndex >= 0) {
    const petIndex = contacts[contactIndex].pets.findIndex((pet) => {
      const { id } = pet;

      return petId === id;
    });

    if (petIndex >= 0) {
      contacts[contactIndex].pets.splice(petIndex, 1);
    }
  }
};

//editPet
export const editPet = (contactId, editedPet) => {
  const contact = getContact(contactId);

  if (!contact) {
    return;
  }

  const petIndex = contact.pets.findIndex((pet) => pet.id === editedPet.id);

  if (petIndex >= 0) {
    const petProperties = Object.keys(contact.pets[petIndex]);

    for (let i = 0; i < petProperties.length; i++) {
      const propertyName = petProperties[i];

      contact.pets[petIndex][propertyName] =
        editedPet[propertyName] || contact.pets[petIndex][propertyName];
    }
  }
};
