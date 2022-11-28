const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/listings";
const listingsUrl = API_BASE_URL + listingsEndPoint;

const allLists = document.getElementById("all-lists");

export async function getListings(url) {
  try {
    const options = {
      method: "GET",
    };
    //console.log(url, options);

    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    console.warn(data);
    printListings(data, allLists);
  } catch (error) {
    console.warn(error);
  }
}
getListings(listingsUrl);

export function printListings(lists) {
  allLists.innerHTML = "";
  let newPost = "";

  for (let list of lists) {
    const date = new Date(list.created);
    const createdDate = date.toLocaleString();

    console.log(list);
    newPost += ` <div class="card m-1 col-lg-3 shadow-lg">
    <a href="/alist.html?id=${list.id}">
        <div class="card-img col-12">
          <img class="" src="${list.media}" alt="" srcset="" width="100%" />
        </div>
        <div class="card-title fs-4 d-flex p-2 col-12 fw-bold">
        ${list.title}
        </div>
      </a>
   

      <div class="card-description d-flex flex-wrap p-2 col-12">
        <p>
        ${list.description}
        </p>
      </div>
    </div>

       `;
  }
  allLists.innerHTML = newPost;
}
