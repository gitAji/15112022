
const bidedLists = document.getElementById('bided-lists');
const accessToken = localStorage.getItem('accessToken');
const userName = localStorage.getItem('username');

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const profileEndPoint = "/auction/profiles/";
const bidsEndPoint = "/bids";
const flag= "?_listings=true"
const bidedUrl = `${API_BASE_URL}${profileEndPoint}${userName}${bidsEndPoint}${flag}`;


export async function profile(url) {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        //console.log(url, options);

        const response = await fetch(url, options);
        //console.log(response);
        const lists = await response.json();

        listOfBids(lists);

        //console.log(lists);
    } catch (error) {
        console.warn(error);
    }
}
profile(bidedUrl);

// getting the result in the console log

function listOfBids(lists) {
  for(var list of lists){
     console.log(list);


    const date = new Date(list.created);
    const createdDate = date.toLocaleString();
    const date2= new Date(list.listing.endsAt);
    const endsDate= date2.toLocaleString();
    const bidImage= `${list.listing.media}`;
 
  let newDiv="";
    newDiv = `
    <div class="card col-lg-3 col-md-6 col-sm-12 p-3">
    <a href="/alist.html?id=${list.listing.id}">
    <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${bidImage}" alt="" srcset="" width="100%" />
        </div>
    <div class="card-title">
    <p>List Title: ${list.listing.title}</p>
    </div>
    <p>Amount: ${list.amount}</p>
    <p>Created: ${createdDate}</p>
    <p>Ends At: ${endsDate}</p>
    <button class="btn btn-outline-primary">Check Who Won</button>
    </div>
    </a>
    </div>`;

    bidedLists.innerHTML += newDiv;



}
}

listOfBids();