const params = new URLSearchParams(document.location.search);
const id = params.get("id");

const accessToken=localStorage.getItem("accessToken");
const username=localStorage.getItem("username");

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/listings?limit=15&sort=created&sortOrder=desc";
const listingsUrl = `${API_BASE_URL}${listingsEndPoint}`;

const allLists = document.getElementById("all-lists");
const postImage = document.getElementById("post-image");

const login = document.getElementById("login");
const logout = document.getElementById("logout");
const myProfile = document.getElementById("myIBuy");

let collections = [];
const loginBtn=`<a href="login.html"><button class="btn btn-link" name="Login">Login</button></a>`;
const logoutBtn=`<a href="login.html"><button class="btn btn-link" name="Login">Logout</button></a>`;
const myProfileBtn=`<a href="profile.html"><button class="btn btn-link" name="MyiBuy">MyiBuy</button></a>`;

if (accessToken) {
  logout.innerHTML = logoutBtn ;
  myProfile.innerHTML = myProfileBtn;
} 

else {
  login.innerHTML = loginBtn;
  

}
logout.addEventListener("click",(e)=> {
  e.preventDefault();
console.log("logout");
localStorage.clear();
window.location.href='./index.html';
});



export async function getListings(url) {
  try {
    const options = {
      method: "GET",
    };
    //console.log(url, options);

    const response = await fetch(url, options);
    //console.log(response);
    const data = await response.json();
    //console.warn(data);
    collections = data;
    printListings(data, allLists);
    ownLists(data);

  } catch (error) {
    //console.warn(error);
  }
}
getListings(listingsUrl);

export function printListings(lists) {
  allLists.innerHTML = "";
  let newPost = "";

  for (let list of lists) {
    const date = new Date(list.endsAt);
    const endsDate = date.toLocaleString();
    document.title = list.title;
    const bidImage = list.media != "" ? `${list.media}` : "https://via.placeholder.com/150";
    const description = list.description == null ? "This Post has no description" : `${list.description}`;

    newPost += ` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
    <a href="/alist.html?id=${list.id}">
        <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${bidImage}" alt="" srcset="" width="100%" />
        </div>
        <div class="card-title fs-4 d-flex p-2 col-12 fw-bold flex-wrap">
        ${list.title}
        </div>
      </a>
   
      <div class="card-description d-flex p-2 col-12">
        <p>
        ${description}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Bids: ${list._count.bids}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Tags: ${list.tags}
        </p>
  
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
         Ends At: ${endsDate}
        </p>
        </div>
    </div>
       `;
  }
  allLists.innerHTML = newPost;
}

/*
// search is working but has some conflict with
const searchInput = document.getElementById("searchText");


searchInput.addEventListener("keyup", filterPosts);

function filterPosts() {

  const filterQuery = searchInput.value.trim();
  const query = localStorage.setItem("filterQuery", filterQuery); // session storage doesn't work
 

  const filteredPost = collections.filter((list) => {
    const t = list.title.toLowerCase();
    const q = filterQuery.toLowerCase();
    return t.startsWith(q) || t.includes(q);
  });
  //console.log(filteredPost);
  printListings(filteredPost);

  if (filteredPost.length === 0) {
    allLists.innerHTML = `<div=class="text-primary"> No result found for "${filterQuery}" </div><div class="text-warning">Use back key to clear!</div>`;
  }
}
*/