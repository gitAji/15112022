
import { getListings } from "./listings";

// search is working but has some conflict with
const searchInput = document.getElementById("searchText");

let collections = [];
searchInput.addEventListener("keyup", filterPosts);

function filterPosts() {

  const filterQuery = searchInput.value.trim();
 

  const filteredPost = collections.filter((list) => {
    const t = list.title.toLowerCase();
    const q = filterQuery.toLowerCase();
    return t.startsWith(q) || t.includes(q);
  });
  //console.log(filteredPost);
  printListings(filteredPost);

  
}
