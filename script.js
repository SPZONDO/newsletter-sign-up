//this function validate an email and checks whether the format is correct

function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.match(emailPattern)) {
        document.getElementById('form').style.display = "none";
        document.getElementById('success').style.display = "block";
        var successMessage = document.getElementById('show-email');
        var emailInput = document.getElementById('emailInput');
        successMessage.textContent = emailInput.value;
        document.getElementById('dismiss').style.display = "block";

        return true;
    } else {
        document.getElementById('form').style.transition = ".3s";
        document.getElementById('error-msg').style.display = "inline-flex";
        document.getElementById('emailInput').style.borderColor = "#f78a8a";
        document.getElementById('emailInput').style.backgroundColor = "#f5cbbc";
        return false;
    }
}