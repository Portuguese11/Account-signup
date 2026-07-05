const form = document.getElementById("signupForm");

const password = document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

const message =
document.getElementById("message");

const toggles =
document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const input =
        toggle.previousElementSibling;

        if(input.type === "password"){
            input.type = "text";
            toggle.classList.replace(
                "fa-eye",
                "fa-eye-slash"
            );
        }else{
            input.type = "password";
            toggle.classList.replace(
                "fa-eye-slash",
                "fa-eye"
            );
        }
    });
});

const themeBtn =
document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    const icon =
    themeBtn.querySelector("i");

    if(document.body.classList.contains(
        "light-mode"
    )){
        icon.classList.replace(
            "fa-moon",
            "fa-sun"
        );
    }else{
        icon.classList.replace(
            "fa-sun",
            "fa-moon"
        );
    }
});

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(password.value.length < 8){

        message.textContent =
        "Password must be at least 8 characters";

        return;
    }

    if(password.value !==
        confirmPassword.value){

        message.textContent =
        "Passwords do not match";

        return;
    }

    message.textContent =
    "Account created successfully! 🎉";

    form.reset();
});