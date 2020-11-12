import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#signupForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        username: document.querySelector("username").value,
        email: document.querySelector("email").value,
        password: document.querySelector("password").value
      }

      console.log(data);
    })




})

const SignUp_Submit = () => {
  return(
<>
</>
  )
}

export default SignUp_Submit;