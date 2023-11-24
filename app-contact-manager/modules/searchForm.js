import { findContact } from './query.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const queryInput = form.q;
  const searchValue = queryInput.value;

  const contacts = findContact(searchValue);

  const stage = document.querySelector('.stage');
  stage.innerText = contacts.toString();

  queryInput.value = '';
});

export default searchForm;

// Tema
// Reset stage on logo click (<button type=“button> in h1)
// Make sure search works for three letter and up

// Add contact
// Click on add contact show form
// (Name surname, phone, email)
// Save -> add to memory
// Cancel -> remove form

// Search
// Bootstrap alert part
// Found x contact(s) -> pluralization with x pet(s) -> pluralization
// Result part
// One card for each contact
// Controls: Delete -> remove contact from memory -> alert contact removed
// Controls: Edit -> E
