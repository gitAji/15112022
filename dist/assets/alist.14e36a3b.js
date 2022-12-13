import"./alert.29446747.js";import"./credits.838e7512.js";import"./listings.f60426cc.js";const P=new URLSearchParams(document.location.search),f=P.get("id");localStorage.getItem("accessToken");const v=localStorage.getItem("username"),h="https://nf-api.onrender.com/api/v1",A="/auction/listings/",D="?_seller=true&_bids=true",N=`${h}${A}${f}${D}`,j=document.getElementById("a-post");async function k(n){try{const d=await(await fetch(n,{method:"GET"})).json();console.log(d),U(d,j)}catch(s){console.warn(s)}}k(N);document.getElementById("bid-list");function U(n,s,y){const d=new Date(n.endsAt),B=d.toLocaleString(),L=new Date;document.title=n.title;const a=d-L,w=Math.floor(a/(1e3*60*60*24)),$=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),E=Math.floor(a%(1e3*60*60)/(1e3*60));var o="";if(a<0?o="Ended":o="Active",o==="Active"){const e=document.getElementById("bidButtonSection");e.innerHTML=`
    <div class="d-flex justify-content-around col-lg-6 col-md-9 m-auto gap-2">
    <input type="text" class="form-control" id="bid-amount" placeholder="Enter bid amount">
    <input type="button" class="btn btn-success btn-lg px-5 fw-bolder" id="bid-button" value="Bid Now" />
    <div class="alert alert-light-secondary fw-bold" id="bidAmountAlert">
    </div>
    </div>`}else bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-around col-6 m-auto gap-2">
    <input type="number" class="form-control" id="bid-amount" placeholder="Bid has ended">
    <button class="btn btn-danger btn-lg" id="bid-button">Bid Ended</button> </div>`;for(let e of n.bids){const c=e.amount,i=Math.max(c),l=document.getElementById("highestBid"),b=`<div class="d-flex  alert alert-light-secondary fw-bold" id="highest">
    Highest bid is ${i}kr</b>  by  ${e.bidderName} &nbsp;<div class="text-muted">Please bid higher than the last bid!</div> </div>`;l.innerHTML=b;const u=new Date(e.created).toLocaleString();e.bidderName;const m=document.getElementById("user-bids");m.innerHTML+=`<div class="d-flex">
    <div class="card-title col-6">
    <p><b>Bidder Name: </b>${e.bidderName}</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Amount: </b>${e.amount}kr</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Time: </b>${u}</p>
    </div>
    </div>`}document.getElementById("bid-button").addEventListener("click",x);const T=`${h}${A}${f}/bids`;function x(){const e=document.getElementById("bid-amount").value.trim();localStorage.getItem("username");const c=Math.floor(e);if(e===""){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a bid amount",t.classList.add("alert-danger")}else if(e<0){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid bid amount",t.classList.add("alert-danger")}else if(e<highestBid){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a higher bid amount",t.classList.add("alert-danger")}else if(e.typeof!=="number"){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid number",t.classList.add("alert-danger")}else{const t=document.getElementById("bidAmountAlert");t.innerHTML=""}console.log(c);const i={amount:c};console.log(i);const l=typeof i;console.log(l);async function b(t,u){const m=localStorage.getItem("accessToken");try{const p={method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify(u)},g=await fetch(t,p),H=await g.json();console.log(H),g.ok&&(bidAmountAlert.innerHTML="Bid placed successfully",bidAmountAlert.classList.remove("alert-danger"),bidAmountAlert.classList.add("alert-success"),setTimeout(()=>{window.location.reload()},2e3))}catch(p){console.warn(p)}}b(T,i),console.log(l)}const r=n.seller.name;console.log(r),r==v&&o==="Ended"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg disabled" id="expired">Expired</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`),r==v&&o==="Active"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg" id="edit">Edit</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`);const I=n.media!=""?`${n.media}`:"https://via.placeholder.com/150",M=n.description!=null?`${n.description}`:"No description available";let S=`
  <div class="card d-flex m-1 col-lg-5 col-12 border-0">
    <div class="card-img-top" style:max-height="20px">
      <img class="img-thumbnail mx-auto" src="${I}" alt="" srcset="" width="100%" />
    </div>
  </div>
  <div class="card col-lg-6 col-12 border-0">
    <div class="card-title fs-4 p-2 col-12 fw-bold">Title:${n.title}</div>

    <div class="card-info p-2 col-12"> 
      <p>
      Description:${M} 
      </p>
    </div>

    <div
      class="card-title d-flex justify-content-start border-0 flex-wrap m-2 flex-column"
    >
   <div class="card-title">
    <p><b>Ends At: </b>${B}</p>
    </div>
    <div class="card-title" id="countdown">
    <p><b>Ends In: </b><span class="px-2">${w}D</span><span>${$}H</span> <span>${E}M</span></p>
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
  `;s.innerHTML=S}
