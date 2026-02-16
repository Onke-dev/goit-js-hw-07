const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === "") {
      return alert(`All form fields must be filled in`);
    }
    console.log(email, password);
    form.reset();
}
