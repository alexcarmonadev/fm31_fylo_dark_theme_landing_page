const error = document.getElementById('alert');

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    error.classList.add('alert');
  } else {
    error.classList.remove('alert');
  }
};

const getValueInput = () => {
  let inputValue = document.getElementById('email').value;
  validateEmail(inputValue);
};
