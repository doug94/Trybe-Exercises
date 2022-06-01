const button = document.getElementById("btn-submit");
const imageAgreement = document.getElementById("privacy");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const textArea = document.getElementById("answer");
button.addEventListener("click", () => {
    if (fullName.value.length < fullName.minLength || fullName.value.length > fullName.maxLength
        || email.value.length < email.minLength || email.value.length > email.maxLength
        || textArea.value.length > textArea.maxLength) {
        alert("Dados inválidos")
        event.preventDefault()
    }
    else if (!imageAgreement.checked) {
        alert("Você deve autorizar o uso de imagens para concorrer ao TrybeTrip");
        event.preventDefault();
    } else {
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
        event.preventDefault();
    }
});