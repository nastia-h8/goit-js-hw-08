import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textInput = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
const formData = {};

getDataFromStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    
    formData[event.target.name] = event.target.value;
    console.log(formData[event.target.name])
    
    const email = formData.email.value;
    const message = formData.message.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onFormSubmit(event) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.preventDefault();
    event.currentTarget.reset();

   localStorage.removeItem(STORAGE_KEY);
}

function getDataFromStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    savedData ? (emailInput.value = savedData.email) : '';
    savedData ? (textInput.value = savedData.message) : '';
    // if (savedData.email) {
    // emailInput.value = savedData.email;
    // }

    // if (savedData.message) {
    // textInput.value = savedData.message;
    // }

//      if (savedData) {
//     emailInput.value = savedData.email;
//     textInput.value = savedData.message;
//   }
}

// function onFormInput (event) {
//     formData[event.target.name] = event.target.value;

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(event) {
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

//     event.preventDefault();
//     event.currentTarget.reset();

//    localStorage.removeItem(STORAGE_KEY);
// }

// function getDataFromStorage() {
//     const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     savedData ? (emailInput.value = savedData.email) : '';
//     savedData ? (textInput.value = savedData.message) : '';
//     // if (savedData.email) {
//     // emailInput.value = savedData.email;
//     // }

//     // if (savedData.message) {
//     // textInput.value = savedData.message;
//     // }

// //      if (savedData) {
// //     emailInput.value = savedData.email;
// //     textInput.value = savedData.message;
// //   }
// }
