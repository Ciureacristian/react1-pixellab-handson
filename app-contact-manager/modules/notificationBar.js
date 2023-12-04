// grab from dom
const notificationBar = document.querySelector('.notification-bar');

// addMessage
export const addMessage = (messageElement, autoCloseDuration = null) => {
  // Clear any existing messages
  clearMessages();

  // Append the new message
  notificationBar.appendChild(messageElement);

  // Optionally, set a timer to close the message after a duration
  if (autoCloseDuration !== null) {
    setTimeout(() => {
      closeMessage(messageElement);
    }, autoCloseDuration);
  }

  // Optionally, add a close button to each message
  const closeButton = createCloseButton(messageElement);
  messageElement.appendChild(closeButton);
};

// clearMessages
export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

// closeMessage
const closeMessage = (messageElement) => {
  messageElement.remove();
};

// createCloseButton
const createCloseButton = (messageElement) => {
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    closeMessage(messageElement);
  });
  return closeButton;
};

// export default DOM object
export default notificationBar;
