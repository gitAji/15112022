const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const loginEndPoint = "/auction/auth/login";
const loginUrl = `${API_BASE_URL}${loginEndPoint}`;

const login = document.getElementById("loginBtn");
const name = document.getElementById("userName");

export function loginForm(){

login.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    var validation = true;

    if (email === "") {
        emailError.innerHTML = "Email is required";
        validation = false;
    }
    else if (email.includes != "noroff.no" || "student.noroff.no") {
        emailError.innerHTML = "Please enter your student email address.";
        validation = false;
    } else {
        emailError.innerHTML = "";
        validation = true;
    }
    if (password === "") {
        passwordError.innerHTML = "Password is required";
        validation = false;
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password is too short.";
        validation = false;
    } else {
        userMessage.innerHTML="";
        emailError.innerHTML="";
        passwordError.innerHTML = "";

        validation = true;
    }


    const loginData = {
        email,
        password,
    }
    console.log(loginData);

    async function loginUser(url, data) {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    
                },
            });
            const answer = await response.json();
            console.log(answer);
            console.log(response);
            if (response.status === 200) {
                const userName = localStorage.setItem('username', answer.name);
                const accessToken = localStorage.setItem('accessToken', answer.accessToken);
                const userCredits= localStorage.setItem('credits', answer.credits);
                window.location.href = "profile.html";
                setTimeout(() => {
                    form.reset();
                    emailError.innerHTML = "";
                }, 500);
            } else {
                userMessage.innerHTML = answer.status;


            }
        } catch (error) {
            console.log(error);
        }

    }
    loginUser(loginUrl, loginData);
});

const userStatus= document.getElementById("status");

function checkLogin() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
userStatus.innerHTML = "You are logged in";   }
else if (!accessToken) {
    userStatus.innerHTML = "You are logged out";
}
}
checkLogin();


}
loginForm();