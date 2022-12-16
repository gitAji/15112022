
const accessToken=localStorage.getItem("accessToken");
const username=localStorage.getItem("username");

const login = document.getElementById("login");
const join= document.getElementById("join-us");
const logout = document.getElementById("logout");
const myProfile = document.getElementById("myIBuy");


const joinBtn=`<a href="register.html"><button class="btn btn-link" name="join">Join Us</button></a>`;
const loginBtn=`<a href="login.html"><button class="btn btn-link" name="Login">Login</button></a>`;
const logoutBtn=`<a href="  "><button class="btn btn-link" name="Logout">Logout</button></a>`;
const myProfileBtn=`<a href="profile.html"><button class="btn btn-link" name="MyiBuy">MyiBuy</button></a>`;

if (accessToken) {
  logout.innerHTML = logoutBtn ;
  myProfile.innerHTML = myProfileBtn;
} 

else {
  login.innerHTML = loginBtn;
  join.innerHTML= joinBtn;
  

}


logout.addEventListener("click",(e)=>{
  e.preventDefault();
  localStorage.clear();
  window.location.href='./index.html';
  
  });

