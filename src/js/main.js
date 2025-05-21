import { checkEmail, checkPass } from './validations.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const validEmail = checkEmail();
        const validPass = checkPass();

        if (validEmail && validPass) {
            alert("Přihlášení proběhlo úspěšně.");
            // sem případně přidáš AJAX fetch()
        }
    });
});