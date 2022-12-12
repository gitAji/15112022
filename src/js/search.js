import {getListings} from "./Listings.js";


let collections = [];
let allLists = document.getElementById("all-lists");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");

export async function searchListings(url) {
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


export function search(lists) {
searchButton.addEventListener("click", filterPosts);
console.log(lists);
function filterPosts() {

  const filterQuery = searchInput.value;
  const query = localStorage.setItem("filterQuery", filterQuery); // session storage doesn't work
  console.log(filterQuery);
  const filteredPost = collections.filter((list) => {
    const t = list.title.toLowerCase();
    const d = list.description.toLowerCase();
    const q = filterQuery.toLowerCase();
    return t.includes(q) || d.includes(q);
  });
  //console.log(filteredPost);
  printListings(filteredPost);

  if (filteredPost.length === 0) {
    allLists.innerHTML = `<div=class="text-primary"> No result found for "${filterQuery}" </div><div class="text-warning">Use back key to clear!</div>`;
  }

}
}
