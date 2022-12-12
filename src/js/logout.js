

const logout = document.getElementById("logout");

export function logoutUser() {
    logout.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("logout clicked");
    
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("credits");
    
    });
}

    