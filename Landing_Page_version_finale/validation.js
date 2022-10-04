//DOM Elements Selection

//Array elements
const contactForm = document.forms['reserve'];
const inputFormRadio = document.querySelectorAll('input[name=location]');
const inputFormValue = document.querySelectorAll(
  'input[type=text], input[type=email], input[type=date],input[type=number]'
);

//single Element
const successMessage = document.querySelector('.succes-confirmation');
const inputFirstName = document.querySelector('#first');
const inputLastName = document.querySelector('#last');
const inputEmail = document.querySelector('#email');
const inputDate = document.querySelector('#birthdate');
const inputNumber = document.querySelector('#quantity');
const inputCheckbox1 = document.querySelector('#checkbox1');
const inputCheckbox2 = document.getElementById('checkbox2');

//----------------------functions-------------------------
/**
 * function validate => show success message on form submit
 */
function validate() {
  successMessage.classList.replace('select-hide', 'success-show');
}

//error message display

/**
 * function addErrorMessage => add error message of a form field
 * @param {Object} field - the form field to be controlled
 * @param {Object} errorMessage - the error message you want to add
 */
function addErrorMessage(field, errorMessage) {
  field.parentElement.setAttribute('data-error-visible', 'true');
  field.parentElement.setAttribute('data-error', errorMessage);
}
/**
 * function removeErrorMessage => reset error message of a form field & the variable valid
 * @param {Object} field - the form field to be controlled
 */
function removeErrorMessage(field) {
  field.parentElement.removeAttribute('data-error-visible', 'true');
  field.parentElement.removeAttribute('data-error');
}
// reset value function
/**
 * function resetInputForm => reset input value manually
 */
function resetInputForm() {
  inputFormValue.forEach((input) => {
    input.value = '';
  });
  inputFormRadio.forEach((input) => {
    input.checked = false;
  });
  inputCheckbox1.checked = true;
  inputCheckbox2.checked = false;
}

//specific functions
/**
 * function nameValidity => check validity of inputs type = text
 * @param {Object} input - the form field to be controlled => must be a text type
 */
function nameValidity(input) {
  let regexName = /^[-a-zA-ZÀ-ÿ \']{2,30}$/;
  let errorMessage = 'Veuillez entrer 2 caractères ou plus pour ce champ.';
  if (!regexName.test(input.value)) {
    addErrorMessage(input, errorMessage);
    return false;
  } else {
    return true;
  }
}
/**
 * function emailValidity => check validity of inputs type = email
 * @param {Object} input - the form field to be controlled => must be a email type
 */
function emailValidity(input) {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //https://regexr.com/3e48o
  let errorMessage = 'Veuillez entrer une adresse mail valide';
  if (!regexEmail.test(input.value)) {
    addErrorMessage(input, errorMessage);
    return false;
  } else {
    return true;
  }
}
/**
 * function dateValidity => check if a date is valid
 * @param {Object} input - the form field to be controlled => must be a date type
 */
function dateValidity(input) {
  let errorMessage = 'Veuillez entrer une date valide';
  const date = new Date(input.value);
  if (isNaN(date.getTime())) {
    addErrorMessage(input, errorMessage);
    return false;
  } else {
    return true;
  }
}
/**
 * function ageValidity => check user birth date validity
 * @param {Object} input - the form field to be controlled => must be a date type
 */
function ageValidity(input) {
  let errorMessage1 =
    'Vous ne pouvez pas entrer une date inférieure au 01/01/1900';
  let errorMessage2 = 'Vous devez avoir 18 ans mininum pour vous inscrire';
  const date = new Date(input.value);
  const minDate = new Date(1899, 12, 01);
  const today = new Date();
  const minAgeYear = today.getFullYear() - 18;
  const minAgeMonth = today.getMonth();
  const minAgeDay = today.getDate();
  const minAgeDate = new Date(minAgeYear, minAgeMonth, minAgeDay);
  if (date < minDate) {
    addErrorMessage(input, errorMessage1);
    return false;
  } else if (date > minAgeDate) {
    addErrorMessage(input, errorMessage2);
    return false;
  } else {
    return true;
  }
}

/**
 * function numberValidity => check validity of the input type = number
 * @param {Object} input - the form field to be controlled => must be a number type
 */
function numberValidity(input) {
  let errorMessage = 'Veuillez entrer un chiffre compris entre 0 et 99';
  let number = input.value;
  if (isNaN(number) || number < 0 || number > 99 || number === '') {
    addErrorMessage(input, errorMessage);
    return false;
  } else {
    return true;
  }
}
/**
 * function radioValidity => check validity of the input type = radio
 * @param {Object} input - the form field to be controlled => must be a radio type
 */
function radioValidity(input) {
  let radioIschecked = false;
  let errorMessage = 'Vous devez cocher un choix pour continuer.';
  input.forEach((field) => {
    if (field.checked) {
      return (radioIschecked = true);
    }
  });
  if (!radioIschecked) {
    addErrorMessage(input[0], errorMessage);
    return false;
  } else {
    return true;
  }
}
/**
 * function checkbox1Validity => check validity of the input checkbox1
 * @param {Object} input - the form field to be controlled => must be a checkbox type
 */
function checkbox1Validity(input) {
  if (!input.checked) {
    let errorMessage = 'Vous devez accepter les termes et conditions.';
    addErrorMessage(input, errorMessage);
    return false;
  } else {
    return true;
  }
}

//global functions
/**
 * function validateInput => check if a form input is valid
 * @param {Object} input - the form field to be controlled
 * @param {string} type - type of the input: name, email, date, number, radio, checkbox
 */

function validateInput(input, type) {
  switch (type) {
    case 'name':
      return nameValidity(input);
      break;
    case 'email':
      return emailValidity(input);
      break;
    case 'date':
      return dateValidity(input);
      break;
    case 'number':
      return numberValidity(input);
      break;
    case 'radio':
      return radioValidity(input);
      break;
    case 'checkbox':
      return checkbox1Validity(input);
      break;
    default:
      return false;
      break;
  }
}

/**
 * function validateForm => check the validity of the form
 */
function validateForm() {
  let checkInputFirstName = validateInput(inputFirstName, 'name');
  let checkInputLastName = validateInput(inputLastName, 'name');
  let checkInputEmail = validateInput(inputEmail, 'email');
  let checkInputDate = validateInput(inputDate, 'date');
  let checkAgeUser = ageValidity(inputDate);
  let checkInputNumber = validateInput(inputNumber, 'number');
  let CheckInputCheckbox = validateInput(inputCheckbox1, 'checkbox');
  let checkInputRadio = validateInput(inputFormRadio, 'radio');

  if (
    checkInputFirstName &&
    checkInputLastName &&
    checkInputEmail &&
    checkInputDate &&
    checkAgeUser &&
    checkInputNumber &&
    CheckInputCheckbox &&
    checkInputRadio
  ) {
    //coding post steps process
    validate();
    resetInputForm();
  }
}

//--------------event listener-----------------

//on form submit
// console.log(contactForm);
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

//on form field focus
inputFirstName.addEventListener('focus', () => {
  removeErrorMessage(inputFirstName);
});
inputLastName.addEventListener('focus', () => {
  removeErrorMessage(inputLastName);
});
inputEmail.addEventListener('focus', () => {
  removeErrorMessage(inputEmail);
});
inputDate.addEventListener('focus', () => {
  removeErrorMessage(inputDate);
});
inputNumber.addEventListener('focus', () => {
  removeErrorMessage(inputNumber);
});

//on form field click{
inputFormRadio.forEach((field) => {
  field.addEventListener('click', () => {
    removeErrorMessage(field);
  });
});
inputCheckbox1.addEventListener('click', () => {
  removeErrorMessage(inputCheckbox1);
  validateInput(inputCheckbox1, 'checkbox');
});

//on form field blur
inputFirstName.addEventListener('blur', () => {
  validateInput(inputFirstName, 'name');
});
inputLastName.addEventListener('blur', () => {
  validateInput(inputLastName, 'name');
});
inputEmail.addEventListener('blur', () => {
  validateInput(inputEmail, 'email');
});
inputDate.addEventListener('blur', () => {
  validateInput(inputDate, 'date');
  ageValidity(inputDate);
});
inputNumber.addEventListener('blur', () => {
  validateInput(inputNumber, 'number');
});
