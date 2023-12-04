import { addMessage } from './notificationBar.js';
import { findContact } from './query.js';
import stage from './stage.js';
import renderMessage from './message.js';
import { pluralize } from './utils.js';
import { render as renderContact } from './contact.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const queryInput = form.q;
  const searchValue = queryInput.value;

  const contacts = findContact(searchValue);
  const contactsCount = contacts.length;

  if (contactsCount <= 0) {
    addMessage(renderMessage('No contacts found', 'warning'));
  } else {
    const petsCount = contacts.reduce((petsCount, contact) => {
      const { pets = [] } = contact;
      petsCount += pets.length;

      return petsCount;
    }, 0);

    addMessage(
      renderMessage(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })} with ${
          petsCount <= 0
            ? 'no pets'
            : pluralize(petsCount, {
                one: 'pet',
                many: 'pets',
              })
        }.`,
        'success',
      ),
    );
  }

  if (searchValue.length < 3) {
    addMessage(
      renderMessage(
        'Please enter at least three letters for search',
        'warning',
      ),
    );
    return;
  }

  const fragment = new DocumentFragment();
  contacts.forEach((contact) => {
    fragment.append(renderContact(contact));
  });

  stage.innerHTML = '';
  stage.append(fragment);

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
