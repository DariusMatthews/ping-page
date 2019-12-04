let form = document.getElementById('form');
let email = document.getElementById('email');
let emailButton = document.getElementById('btn');

// run validation script when form is submitted 
emailButton.addEventListener('click', (ev) => {
  //stop browser validation
  ev.preventDefault();
  ev.stopPropagation();

  let validate = true;
  let errorText = document.getElementById('error-text');

  // check to see if email input is empty or invalid format
  if (email.value === '') {
    validate = false;
    email.classList.add('error-input');
    errorText.style.display = "block";
    errorText.innerText = 'please enter email address';
   } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    validate = false;
    errorText.style.display = "block";
    email.classList.add('error-input');
    errorText.innerText = 'please provide a valid email address';
  } else {
    validate = true;
    form.submit();
  }
});