const accessToken = localStorage.setItem("accessToken");
const username = localStorage.setItem("username");

const login = document.getElementById("login");
const logout = document.getElementById("logout");
const myProfile = document.getElementById("myIBuy");
let collections = [];
const loginBtn=`<a href="login.html"><button class="btn btn-outline-primary" name="Login">Login</button></a>`;
const logoutBtn=`<a href="login.html"><button class="btn btn-outline-primary" name="Login">Logout</button></a>`;
const myProfileBtn=`<a href="profile.html"><button class="btn btn-outline-primary" name="MyiBuy">MyiBuy</button></a>`;

if (accessToken) {
  logout.innerHTML = logoutBtn ;
  myProfile.innerHTML = myProfileBtn;
} else {
  login.innerHTML = loginBtn;
}
logout.addEventListener("click",(e)=> {
  e.preventDefault();
console.log("logout");
localStorage.clear();
window.location.href='./index.html';
});
