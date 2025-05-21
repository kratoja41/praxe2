
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    function checkemail() {
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

    function checkpass() {
        const passwordField = document.getElementById("password");
        const password = passwordField.value.trim();

        if (password === "") {
            showError("Heslo je povinné.");
            return false;
        }

        return true;
    }


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".login-form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const validEmail = checkemail();
            const validPass = checkpass();

            if (validEmail && validPass) {
                alert("Přihlášení proběhlo úspěšně.");
                // zde můžeš případně poslat data na server
            }
        });

    });

    function showError(message) {
        const container = document.getElementById("error-container");

        const toast = document.createElement("div");
        toast.className = "error-toast";
        toast.textContent = message;

        container.appendChild(toast);

        // Po 4 sekundách odstraní zprávu
        setTimeout(() => {
            toast.remove();
        }, 2000);
    }
