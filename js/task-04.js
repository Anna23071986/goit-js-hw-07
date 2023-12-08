"use strict";

const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const obj = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(obj);
  event.target.reset();
});
