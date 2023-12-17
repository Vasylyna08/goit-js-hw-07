const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const elems = event.target.elements;
  const userForm = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };
  if (userForm.email === '' || userForm.password == '') {
    return alert('All form fields must be filled in');
  }
  console.log(userForm);
  event.target.reset();
});
