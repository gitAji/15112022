
const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/listings?limit=12&sort=created&sortOrder=desc";
const listingsUrl = `${API_BASE_URL}${listingsEndPoint}`;

let collections = [];
let allLists = document.getElementById("all-lists");


async function searchListings(url) {
  try {
    const options = {
      method: "GET",
    };
    //console.log(url, options
    const response = await fetch(url, options);
    //console.log(response);  
    const data = await response.json();
    //console.log(data);
    collections = data;
    //console.log(collections);
    printListings(collections);
  } catch (error) {
    console.warn(error);
  }
}
searchListings(listingsUrl);

// search is working but has some conflict with
const searchInput = document.getElementById("searchText");
const endSoon= document.getElementById("ends-soon");
const latest= document.getElementById("latest");

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


/*
searchButton.addEventListener("click", filterPosts);
console.log(lists);
function filterPosts() {

  const filterQuery = searchInput.value;
  const query = localStorage.setItem("filterQuery", filterQuery); // session storage doesn't work
  console.log(filterQuery);
  const filteredPost = collections.filter((list) => {
    const t = list.title.toLowerCase();
    const q = filterQuery.toLowerCase();
    return t.includes(q);
  });
  //console.log(filteredPost);
  printListings(filteredPost);

  if (filteredPost.length === 0) {
    allLists.innerHTML = `<div=class="text-primary"> No result found for "${filterQuery}" </div><div class="text-warning">Use back key to clear!</div>`;
  }

}
*/