const accessToken = localStorage.setItem("accessToken");
const username = localStorage.setItem("username");



function clearSession() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("credits");

}