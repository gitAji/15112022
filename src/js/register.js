const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const registerEndPoint = "/auction/auth/register";
const registerUrl = `${API_BASE_URL}${registerEndPoint}`;

const name = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const avatar = document.getElementById("avatar");
const register = document.getElementById("register");
const form = document.getElementById("registration");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const avatarError = document.getElementById("avatar-error");


 function userRegistration() {
    register.addEventListener("click", async (e) => {
        e.preventDefault();
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();
        const avatarValue = avatar.value.trim();


        var validation = true;

        if (nameValue === "") {
            nameError.innerHTML = 'Name is required';
            validation = false;
        } else if (nameValue.length < 4) {
            nameError.innerHTML = "Name is too short.";
            validation = false;
        } else {
            nameError.innerHTML = "";
        }

        if (emailValue === "") {
            emailError.innerHTML = 'Email is required';
            validation = false;
        } else if (emailValue.includes === "noroff.no || student.noroff.no") {
            emailError.innerHTML = "Please enter your student email address.";
            validation = false;
        } else {
            emailError.innerHTML = "";
        }

        if (passwordValue === "") {
            passwordError.innerHTML = 'Password is required';
            validation = false;
        } else if (passwordValue.length < 8) {
            passwordError.innerHTML = "password must be longer than 8.";
            validation = false;
        } else {
            passwordError.innerHTML = "";
        }

        if (confirmPasswordValue === "") {
            confirmPasswordError.innerHTML = "Please confirm your password.";
            validation = false;
        } else if (confirmPasswordValue.length < 8) {
            confirmPasswordError.innerHTML = "Password must be longer than 8.";
            validation = false;
        } else {
            confirmPasswordError.innerHTML = "";
        }

        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.innerHTML = "Passwords do not match.";
        } else {
            confirmPasswordError.innerHTML = "";
        }

        if (validation === false) {
            return;
        }
        e.preventDefault();






        const registerData = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            avatar: avatarValue

        }
        async function registerUser(url, data) {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
                //console.log(url, data, options);

                const response = await fetch(url, options);
                //console.log(response);
                const answer = await response.json();
                //console.log(answer);
                if (response.ok) {
                    userMessage.innerHTML = `
                    <div class="alert alert-success" role="alert">
                    You are registered now! Please login to bid!
                  </div>`;
                    form.reset();

                } else {
                    userMessage.innerHTML = `
                    <div class="alert alert-danger">
                    ${answer.status}
                  </div>`;
                    setTimeout(() => {
                        userMessage.innerHTML = `
                    <div class="alert alert-danger">
                    Duplicated data is entered!
                  </div>`;
                    }, 3000);


                };
            } catch (error) {
                //console.warn(error);
            }
        }
        registerUser(registerUrl, registerData, );

    })

}
userRegistration();

