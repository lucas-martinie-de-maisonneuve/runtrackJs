document.addEventListener("DOMContentLoaded", function () {
    $("#button_login").on("click", function(event) {
        event.preventDefault();
        VerifEmail($("#email").val(), $("#emailError"));
        VerifPassword($("#password").val(), $("#passwordError"));
    });

    $("#button_register").on("click", function(event) {
        event.preventDefault();
        VerifChampTexte($("#nom").val(), $("#nomError"));
        VerifChampTexte($("#prenom").val(), $("#prenomError"));
        VerifEmail($("#email").val(), $("#emailError"));
        VerifPassword($("#password").val(), $("#passwordError"),true);
        VerifConfirmPassword($("#password").val(), $("#confirmPassword").val(), $("#confirmPasswordError"));
        VerifAddresse($("#adresse").val(), $("#adresseError"));
        VerifCodePostal($("#codePostal").val(), $("#codePostalError"));
    });

    function VerifChampTexte(champ, errorElement) {
        if (champ === "" || champ.length < 3) {
            errorElement.text("Veuillez renseigner ce champ avec au moins 3 caractères");
        } else {
            errorElement.text("");
        }
    }

    function VerifPassword(password, errorElement, isRegistration) {
        if (password === "") {
            errorElement.text("Veuillez renseigner ce champ");
        } else if (isRegistration && (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))) {
            errorElement.text("Veuillez renseigner un mot de passe valide : au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial");
        } else if (!isRegistration && password.length < 8) {
            errorElement.text("Veuillez renseigner un mot de passe valide (au moins 8 caractères)");
        } else {
            errorElement.text("");
        }
    }
    
    function VerifAddresse(champ, errorElement) {
        if (champ === "" || !/\d/.test(champ) || !/[a-zA-Z]/.test(champ)) {
            errorElement.text("Veuillez renseigner ce champ avec un numéro de rue et une rue");
        } else {
            errorElement.text("");
        }
    }

    function VerifCodePostal(codePostal, errorElement) {
        if (codePostal === "" || !/^\d+$/.test(codePostal)) {
            errorElement.text("Veuillez renseigner ce champ avec un code postal valide");
        } else {
            errorElement.text("");
        }
    }

    function VerifEmail(email, errorElement) {
        if (email === "") {
            errorElement.text("Veuillez renseigner ce champ");
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(email)) {
            errorElement.text("Veuillez renseigner un email valide");
        } else {
            errorElement.text("");
        }
    }

    function VerifConfirmPassword(password, confirmPassword, errorElement) {
        if (confirmPassword === "" || password !== confirmPassword) {
            errorElement.text("Le mot de passe ne correspond pas");
        } else {
            errorElement.text("");
        }
    }
});
