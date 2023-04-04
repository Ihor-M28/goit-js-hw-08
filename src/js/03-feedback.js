// import throttle from 'lodash.throttle';
// const feedbackForm = document.querySelector('.feedback-form');
// const feedbackFormState = {
//   email: '',
//   message: ''
// };
// function handleFormInput() {
// const feedbackFormState = {
// email: feedbackForm.elements.email.value,
// message: feedbackForm.elements.message.value
// };
// localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
// }

// feedbackForm.addEventListener('input', handleFormInput);

// // const feedbackForm = document.querySelector('.feedback-form');
// const emailInput = feedbackForm.elements.email;
// const messageInput = feedbackForm.elements.message;

// const savedFeedbackFormState = localStorage.getItem('feedback-form-state');

// if (savedFeedbackFormState) {
// const feedbackFormState = JSON.parse(savedFeedbackFormState);
// emailInput.value = feedbackFormState.email;
// messageInput.value = feedbackFormState.message;
// } else {
// emailInput.value = '';
// messageInput.value = '';
// }

// // const feedbackForm = document.querySelector('#feedback-form');

// feedbackForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   console.log(feedbackFormState);

//   localStorage.removeItem('feedback-form-state');
//   feedbackFormState.email = '';
//   feedbackFormState.message = '';
//   emailInput.value = '';
//   messageInput.value = '';
// });


// const updateLocalStorageThrottled = throttle(() => {
//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
// }, 500);

import throttle from 'lodash.throttle';

const LOCKALSTORAGE_KEY = 'feedback-form-state';

// const formData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormSaveFeedback, 500));
formEl.addEventListener('submit', onFormSubmit);

onFormGetFeedback();

function onFormSaveFeedback(evt) {
  // formData[evt.target.name] = evt.target.value;
  // console.log(formData);

  const email = formEl.email.value;
  const message = formEl.message.value;

  const inputValue = { email, message };

  localStorage.setItem(LOCKALSTORAGE_KEY, JSON.stringify(inputValue));
}

function onFormGetFeedback() {
  const getFeedback = localStorage.getItem(LOCKALSTORAGE_KEY);
  
  if (getFeedback) {
    const parsedGetFeedback = JSON.parse(getFeedback);

    const email = parsedGetFeedback.email;
    const message = parsedGetFeedback.message;

    formEl.email.value = email;
    formEl.message.value = message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const submitValue = {
    email: formEl.email.value,
    message: formEl.message.value,
  };
  console.log(submitValue);

  evt.currentTarget.reset();
  localStorage.removeItem(LOCKALSTORAGE_KEY);
}