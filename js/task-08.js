
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Усі поля мають бути заповнені');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value
  };
  console.log(formData);
 

  event.target.reset();
};






















//     event.target.reset()
    
//     // console.log('ghghghgg')
// })






// const inputEmailEl = document.querySelector(`input[type="email"]`)
// const inputPasswordEl = document.querySelector(`input[type="password"]`)
// const buttonSubmitEl = document.querySelector(`button[type="submit"]`)

// console.log(inputEmailEl.value)



// inputEmailEl.addEventListener('input', (event) => {
//   return event.target.value
// })


// inputPasswordEl.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })

// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();

//     event.target.reset()
    
//     // console.log('ghghghgg')
// })

// console.log(inputEmailEl.value)
// formEl.addEventListener('submit', handleCheckFieldsComplete);

// function handleCheckFieldsComplete(event) {

//     console.log(inputEmailEl.);
//     // if (inputEmailEl.value === '' || inputPasswordEl.value === "") {
//     //     alert('mmfgmgg')
//     // }
// }