
import { showError } from './toast.js';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function checkEmail() {
    const emailField = document.getElementById("email");
    const email = emailField.value.trim();

    if (email === "") {
        showError("Email je povinný.");
        return false;
    }

    if (!emailRegex.test(email)) {
        showError("Neplatný formát emailu.");
        return false;
    }

    return true;
}

export function checkPass() {
    const passwordField = document.getElementById("password");
    const password = passwordField.value.trim();

    if (password === "") {
        showError("Heslo je povinné.");
        return false;
    }

    return true;
}