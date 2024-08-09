document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    const username = document.getElementById("username");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const terms = document.getElementById("terms");
    const comment = document.getElementById("comment");

    const nameError = document.getElementById("name-error");
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const emailError = document.getElementById("email-error");
    const termsError = document.getElementById("terms-error");
    const genderError = document.getElementById("gender-error");
    const commentError = document.getElementById("comment-error");

    function validateField(field, errorElement, errorMessage) {
        if (!field.value.trim()) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = "";
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const genders = document.querySelectorAll('input[name="gender"]');
        let selected = false;
        genders.forEach(gender => {
            if (gender.checked){
                selected = true;
            }
        });
        if (!selected){
            genderError.textContent='Gender is requied';
        } 
        else {
            genderError.textContent=''
        }
    });

    username.addEventListener("input", () => validateField(username, nameError, "Username is required"));
    firstName.addEventListener("input", () => validateField(firstName, firstNameError, "First name is required"));
    lastName.addEventListener("input", () => validateField(lastName, lastNameError, "Last name is required"));
    email.addEventListener("input", () => validateField(email, emailError, "Email is required"));
    comment.addEventListener("input", () => validateField(comment, commentError, "Commment is required"));


    terms.addEventListener("change", () => {
        if (!terms.checked) {
            termsError.textContent = "You must agree to the terms and conditions";
        } else {
            termsError.textContent = "";
        }
    });

    
    form.addEventListener("submit", (e) => {
        validateField(username, nameError, "Username is required");
        validateField(firstName, firstNameError, "First name is required");
        validateField(lastName, lastNameError, "Last name is required");
        validateField(email, emailError, "Email is required");
        validateField(comment, commentError, "Comment is required");

        if (!terms.checked) {
            termsError.textContent = "You must agree to the terms and conditions";
        }

        // If any errors are present, prevent form submission
        if (nameError.textContent || firstNameError.textContent || lastNameError.textContent || emailError.textContent || termsError.textContent) {
            e.preventDefault();
        }
    });
});
