import"./nav.js";import"./credits.js";const S=new URLSearchParams(document.location.search),f=S.get("id"),H=localStorage.getItem("accessToken"),m=localStorage.getItem("username"),h="https://nf-api.onrender.com/api/v1",y="/auction/listings/",P="?_seller=true&_bids=true",D=`${h}${y}${f}${P}`,j=document.getElementById("a-post");async function N(n){try{const c=await(await fetch(n,{method:"GET"})).json();k(c,j)}catch(d){console.warn(d)}}N(D);document.getElementById("bid-list");function k(n,d){const a=new Date(n.endsAt),c=a.toLocaleString(),A=new Date;document.title=n.title;const s=a-A,B=Math.floor(s/(1e3*60*60*24)),L=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),T=Math.floor(s%(1e3*60*60)/(1e3*60));var o="";if(s<0?o="Ended":o="Active",o==="Active"){const e=document.getElementById("bidButtonSection");e.innerHTML=`
    <div class="d-flex justify-content-around col-lg-6 col-md-9 m-auto gap-2">
    <input type="text" class="form-control" id="bid-amount" placeholder="Enter bid amount">
    <input type="button" class="btn btn-success btn-lg px-5 fw-bolder" id="bid-button" value="Bid Now" />
    <div class="alert alert-light-secondary fw-bold" id="bidAmountAlert">
    </div>
    </div>`}else bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-around col-6 m-auto gap-2">
    <input type="number" class="form-control" id="bid-amount" placeholder="Bid has ended">
    <button class="btn btn-danger btn-lg" id="bid-button">Bid Ended</button> </div>`;for(let e of n.bids){const l=e.amount,r=Math.max(l),b=document.getElementById("highestBid"),t=`<div class="d-flex  alert alert-light fw-bold p-2 justify-content-between" id="highest">
    Highest bid is ${r}kr</b>  by  ${e.bidderName} &nbsp;<div class="text-muted">Please bid higher than the last bid!</div> </div>`;b.innerHTML=t;const u=new Date(e.created).toLocaleString();e.bidderName;const i=document.getElementById("user-bids");i.innerHTML+=`<div class="d-flex">
    <div class="card-title p-2">
    <p><b>Bidder Name: </b>${e.bidderName}</p>
    </div>
    <div class="card-title p-2">
    <p><b>Bid Amount: </b>${e.amount}kr</p>
    </div>
    <div class="card-title p-2">
    <p><b>Bid Time: </b>${u}</p>
    </div>
    </div>`}document.getElementById("bid-button").addEventListener("click",$);const w=`${h}${y}${f}/bids`;function $(){const e=document.getElementById("bid-amount").value.trim();localStorage.getItem("username");const l=Math.floor(e);if(e===""){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a bid amount",t.classList.add("alert-secondary","m-auto","col-4")}else if(e<0){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid bid amount",t.classList.add("alert-secondary","m-auto","col-4")}else if(e<highestBid){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a higher bid amount",t.classList.add("alert-secondary","m-auto","col-4")}else if(e.typeof!=="number"){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid number",t.classList.add("alert-secondary","m-auto","col-4")}else{const t=document.getElementById("bidAmountAlert");t.innerHTML=""}const r={amount:l};async function b(t,v){const u=localStorage.getItem("accessToken");try{const i={method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify(v)},g=await fetch(t,i),I=await g.json();console.log(I),g.ok&&(bidAmountAlert.innerHTML="Bid placed successfully",bidAmountAlert.classList.remove("alert-danger"),bidAmountAlert.classList.add("alert-success"),setTimeout(()=>{window.location.reload()},2e3))}catch(i){console.warn(i)}}b(w,r)}const p=n.seller.name;p==m&&o==="Ended"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg disabled" id="expired">Expired</button>
    <button class="btn btn-primary btn-lg" id="delete">Delete</button>

    </div>`),p==m&&o==="Active"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg" id="edit">Edit</button>
    <button class="btn btn-primary btn-lg" id="delete">Delete</button>

    </div>`),!m&&!H&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <a href="login.html"><button class="btn btn-outline-success btn-lg" id="edit">Login To Bid</button></a>

    </div>`);const E=n.media!=""?`${n.media}`:"https://via.placeholder.com/150",x=n.description!=""?`${n.description}`:" No description available:";let M=`
  <div class="card d-flex m-1 col-lg-5 col-12 border-0">
    <div class="card-img-top" style:max-height="20px">
      <img class="img-thumbnail mx-auto" src="${E}" alt="" srcset="" width="100%" />
    </div>
  </div>
  <div class="card col-lg-6 col-12 border-0">
    <div class="card-title fs-4 p-2 col-12 fw-bold">Title:${n.title}</div>

    <div class="card-info p-2 col-12"> 
      <p>
      <b>Description: </b>${x} 
      </p>
    </div>

    <div
      class="card-title d-flex justify-content-start border-0 flex-wrap m-2 flex-column"
    >
   <div class="card-title">
    <p><b>Ends At: </b>${c}</p>
    </div>
    <div class="card-title" id="countdown">
    <p><b>Ends In: </b><span class="px-2">${B}D</span><span>${L}H</span> <span>${T}M</span></p>
    </div>
    <div class="card-title">
    <p><b>Posted By: </b>${n.seller.name}</p>
    </div>
    <div id="statusUpdate"><b>Status:</b> ${o}</div>
    <div class="card-title py-3">
      <p>This item has (${n._count.bids}) bids at the movement</p>
    </div>
      </div>
  </div></div>
  `;d.innerHTML=M}
