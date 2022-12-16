
const ownLists= document.getElementById('active-listings');
const userName= localStorage.getItem('username');
const accessToken= localStorage.getItem('accessToken');

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/profiles/";
const ownListingsUrl = `${API_BASE_URL}${listingsEndPoint}${userName}/listings`;

//console.log(userName);
//console.log(ownListingsUrl);

async function getOwnListings(url) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${accessToken}`,
            },
        }
        //console.log(url);
        const response = await fetch(url, options);
    //console.log(response);
    const data = await response.json();
    //console.warn(data);
    printOwnListings(data, ownLists);
    
  } catch (error) {
    //console.warn(error);
  }
}
getOwnListings(ownListingsUrl);

function printOwnListings(data, ownLists) {
  //console.log(data);
  for(let item of data) {
    const createdDate= new Date(item.created).toLocaleString();
    const endDate= new Date(item.endsAt).toLocaleString();
    const buttons= document.createElement('div');
    
   
    //console.log(item.title);
    let newListing = `
   
    <div class="card col-lg-3 col-md-6 col-sm-12 ">
    <div class="row">
    <a href="aList.html?id=${item.id}" class="card-link">
        <div class="col-12 align-content-center">
            <img class="img-thumbnail border-0" src="${item.media}" alt="" srcset="" width="100%" id="avatar" />
            </div>
        <div class="card-body bg-gray p-3 col-12">
            <h5 class="card-title">Title: ${item.title}</h5>
            <p class="card-text">Description: ${item.description}</p>
            <p class="card-text">Total Bids: ${item._count.bids}</p>
            <p class="card-text">Created: ${createdDate}</p>
            <p class="card-text">Ends At: ${endDate}</p>
            
            </div>    </a>
           
    </div>

    `;
    ownLists.innerHTML += newListing;


  }
}



