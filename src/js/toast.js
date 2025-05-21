export function showError(message) {
    const container = document.getElementById("error-container");

    const toast = document.createElement("div");
    toast.className = "error-toast";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}