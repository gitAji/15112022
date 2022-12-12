
// onload update the credit and username
const userCredits= document.getElementById("credits");
const loggedInUser= document.getElementById("whoIsLoggedIn");

const localStorageCredits = localStorage.getItem("credits");
const localStorageName= localStorage.getItem("username");

function getCredits() {
    if (localStorageCredits === null || localStorageName === null) {
        userCredits.innerHTML = "Please login to see your credits";
        loggedInUser.innerHTML = "Hello Guest!";
    }
    else {

window.addEventListener("load", () => {
userCredits.innerHTML = "Available Credits:"+ " " + localStorageCredits;
loggedInUser.innerHTML = "Hello" + " " + localStorageName+"!";

});
}
}
getCredits();
