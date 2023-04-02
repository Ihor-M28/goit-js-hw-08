const feedbackForm = document.querySelector('.feedback-form');
function handleFormInput() {
const feedbackFormState = {
email: feedbackForm.elements.email.value,
message: feedbackForm.elements.message.value
};
localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

feedbackForm.addEventListener('input', handleFormInput);

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;

const savedFeedbackFormState = localStorage.getItem('feedback-form-state');

if (savedFeedbackFormState) {
const feedbackFormState = JSON.parse(savedFeedbackFormState);
emailInput.value = feedbackFormState.email;
messageInput.value = feedbackFormState.message;
} else {
emailInput.value = '';
messageInput.value = '';
}

const feedbackForm = document.querySelector('#feedback-form');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(feedbackFormState);

  localStorage.removeItem('feedback-form-state');
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  emailInput.value = '';
  messageInput.value = '';
});

import throttle from 'lodash.throttle';

const updateLocalStorageThrottled = throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}, 500);

emailInput.addEventListener('input', () => {
  feedbackFormState.email = emailInput.value;
  updateLocalStorageThrottled();
});

messageInput.addEventListener('input', () => {
  feedbackFormState.message = messageInput.value;
  updateLocalStorageThrottled();
});