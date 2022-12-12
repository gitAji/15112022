import {
  Button
} from "bootstrap";
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
const accessToken = localStorage.getItem("accessToken");
const userName = localStorage.getItem("username");

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const aListEndPoint = "/auction/listings/";
const flag = "?_seller=true&_bids=true";
const aSinglePostURL = `${API_BASE_URL}${aListEndPoint}${id}${flag}`;

const out = document.getElementById('a-post');
/**
 * 
 * @param {singlePost} url
 * @return {data}
 * 
 */

async function getAPost(url) {
  try {
    const options = {
      method: 'GET',
    }
    //console.log(url);

    const response = await fetch(url, options);
    //console.log(response);
    const list = await response.json();
    console.log(list);
    listAPost(list, out);


  } catch (error) {
    console.warn(error);
  }
}
getAPost(aSinglePostURL);


const bidList = document.getElementById('bid-list');

export function listAPost(list, out, ownBidCheck) {


  const date = new Date(list.endsAt);
  const endsDate = date.toLocaleString();
  const currentDate = new Date();
  

  document.title = list.title;
  //console.log(endsDate);
  const distance = date - currentDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log(days, hours, minutes, seconds);
  //console.log(seconds); // seconds left
  const timeLeft = `${days}D ${hours}H ${minutes}M ${seconds}S`;

  //console.log(timeLeft);

  var statusUpdate = "";
  if (distance < 0) {
    statusUpdate = "Ended";

  } else {
    statusUpdate = "Active";
  }

  if (statusUpdate === "Active") {
    const bidButtonSection = document.getElementById('bidButtonSection');
    bidButtonSection.innerHTML = `
    <div class="d-flex justify-content-around col-lg-6 col-md-9 m-auto gap-2">
    <input type="text" class="form-control" id="bid-amount" placeholder="Enter bid amount">
    <input type="button" class="btn btn-success btn-lg px-5 fw-bolder" id="bid-button" value="Bid Now" />
    <div class="alert alert-light-secondary fw-bold" id="bidAmountAlert">
    </div>
    </div>`;
  } else {
    bidButtonSection.innerHTML = `
    <div class="d-flex justify-content-around col-6 m-auto gap-2">
    <input type="number" class="form-control" id="bid-amount" placeholder="Bid has ended">
    <button class="btn btn-danger btn-lg" id="bid-button">Bid Ended</button> </div>`;

  }

  




  for (let bid of list.bids) {
    const bidAmount = bid.amount;
    //console.log(bidAmount);
    const highestBid = Math.max(bidAmount);
    //console.log(highestBid);
    const topBid = document.getElementById('highestBid');

    const newDiv = `<div class="d-flex  alert alert-light-secondary fw-bold" id="highest">
    Highest bid is ${highestBid}kr</b>  by  ${bid.bidderName} &nbsp;<div class="text-muted">Please bid higher than the last bid!</div> </div>`;
    topBid.innerHTML = newDiv;


    const date = new Date(bid.created);
    const biddedDate = date.toLocaleString();
    const bidderName = bid.bidderName;

    const bidList = document.getElementById('user-bids');

    bidList.innerHTML += `<div class="d-flex">
    <div class="card-title col-6">
    <p><b>Bidder Name: </b>${bid.bidderName}</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Amount: </b>${bid.amount}kr</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Time: </b>${biddedDate}</p>
    </div>
    </div>`;


  }
  const bidButton = document.getElementById('bid-button');
  bidButton.addEventListener('click', bidNow);

  const postBidUrl = `${API_BASE_URL}${aListEndPoint}${id}/bids`;

  function bidNow() {
    const bidAmount = document.getElementById('bid-amount').value.trim();
    const userName = localStorage.getItem("username");
    const amount = Math.floor(bidAmount);

    var validation = true;

    if (bidAmount === "") {
      const bidAmountAlert = document.getElementById('bidAmountAlert');
      bidAmountAlert.innerHTML = "Please enter a bid amount";
      bidAmountAlert.classList.add('alert-danger');
      validation = false;
    } else if (bidAmount < 0) {
      const bidAmountAlert = document.getElementById('bidAmountAlert');
      bidAmountAlert.innerHTML = "Please enter a valid bid amount";
      bidAmountAlert.classList.add('alert-danger');
      validation = false;
    } else if (bidAmount < highestBid) {
      const bidAmountAlert = document.getElementById('bidAmountAlert');
      bidAmountAlert.innerHTML = "Please enter a higher bid amount";
      bidAmountAlert.classList.add('alert-danger');
      validation = false;
    } else if (bidAmount.typeof !== "number") {
      const bidAmountAlert = document.getElementById('bidAmountAlert');
      bidAmountAlert.innerHTML = "Please enter a valid number";
      bidAmountAlert.classList.add('alert-danger');
      validation = false;
    } else {
      const bidAmountAlert = document.getElementById('bidAmountAlert');
      bidAmountAlert.innerHTML = "";

    }
    validation = true;

    console.log(amount);

    const bid = {
      amount
    }
    console.log(bid);
    const type = typeof (bid);
    console.log(type); //getting object as type
    async function postBid(url, amount) {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const options = {
          method: 'POST',
          headers: {

            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(amount),
          // moved the content type to the headers solved the problem of expecting object instead of string
        }
        //console.log(url);

        const response = await fetch(url, options);
        //console.log(response);
        const answer = await response.json();
        console.log(answer);
        if (response.ok) {
          bidAmountAlert.innerHTML= "Bid placed successfully";
          bidAmountAlert.classList.remove('alert-danger');
          bidAmountAlert.classList.add('alert-success');
          setTimeout(() => {
            window.location.reload();
          }, 2000);

        }




      } catch (error) {
        console.warn(error);

      }
    }
    postBid(postBidUrl, bid);
    console.log(type);
  }
  
const seller= list.seller.name;
console.log(seller);
if(seller == userName && statusUpdate === "Ended"){
  //alert("can not bid on own listing");
  bidButtonSection.innerHTML = `
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg disabled" id="expired">Expired</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`;
}
if(seller == userName && statusUpdate === "Active"){
  //alert("can not bid on own listing");
  bidButtonSection.innerHTML = `
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg" id="edit">Edit</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`;
}
  const postImage = list.media != "" ? `${list.media}` : "https://via.placeholder.com/150";
  const description = list.description != null ? `${list.description}` : "No description available";
  let newDiv = `
  <div class="card d-flex m-1 col-lg-5 col-12 border-0">
    <div class="card-img-top" style:max-height="20px">
      <img class="img-thumbnail mx-auto" src="${postImage}" alt="" srcset="" width="100%" />
    </div>
  </div>
  <div class="card col-lg-6 col-12 border-0">
    <div class="card-title fs-4 p-2 col-12 fw-bold">Title:${list.title}</div>

    <div class="card-info p-2 col-12"> 
      <p>
      Description:${description} 
      </p>
    </div>

    <div
      class="card-title d-flex justify-content-start border-0 flex-wrap m-2 flex-column"
    >
   <div class="card-title">
    <p><b>Ends At: </b>${endsDate}</p>
    </div>
    <div class="card-title" id="countdown">
    <p><b>Ends In: </b><span class="px-2">${days}D</span><span>${hours}H</span> <span>${minutes}M</span></p>
    </div>
    <div class="card-title">
    <p><b>Posted By: </b>${list.seller.name}</p>
    </div>
    <div id="statusUpdate"><b>Status:</b> ${statusUpdate}</div>
    <div class="card-title py-3">
      <p>This item has (${list._count.bids}) bids at the movement</p>
    </div>
      </div>
  </div></div>
  `;



  out.innerHTML = newDiv;

}