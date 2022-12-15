const H=new URLSearchParams(document.location.search),h=H.get("id"),P=localStorage.getItem("accessToken"),v=localStorage.getItem("username"),y="https://nf-api.onrender.com/api/v1",A="/auction/listings/",D="?_seller=true&_bids=true",j=`${y}${A}${h}${D}`,N=document.getElementById("a-post");async function k(n){try{const s=await(await fetch(n,{method:"GET"})).json();console.log(s),U(s,N)}catch(i){console.warn(i)}}k(j);document.getElementById("bid-list");function U(n,i){const r=new Date(n.endsAt),s=r.toLocaleString(),B=new Date;document.title=n.title;const a=r-B,L=Math.floor(a/(1e3*60*60*24)),T=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),$=Math.floor(a%(1e3*60*60)/(1e3*60));var o="";if(a<0?o="Ended":o="Active",o==="Active"){const e=document.getElementById("bidButtonSection");e.innerHTML=`
    <div class="d-flex justify-content-around col-lg-6 col-md-9 m-auto gap-2">
    <input type="text" class="form-control" id="bid-amount" placeholder="Enter bid amount">
    <input type="button" class="btn btn-success btn-lg px-5 fw-bolder" id="bid-button" value="Bid Now" />
    <div class="alert alert-light-secondary fw-bold" id="bidAmountAlert">
    </div>
    </div>`}else bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-around col-6 m-auto gap-2">
    <input type="number" class="form-control" id="bid-amount" placeholder="Bid has ended">
    <button class="btn btn-danger btn-lg" id="bid-button">Bid Ended</button> </div>`;for(let e of n.bids){const c=e.amount,d=Math.max(c),l=document.getElementById("highestBid"),u=`<div class="d-flex  alert alert-light-secondary fw-bold" id="highest">
    Highest bid is ${d}kr</b>  by  ${e.bidderName} &nbsp;<div class="text-muted">Please bid higher than the last bid!</div> </div>`;l.innerHTML=u;const m=new Date(e.created).toLocaleString();e.bidderName;const p=document.getElementById("user-bids");p.innerHTML+=`<div class="d-flex">
    <div class="card-title col-6">
    <p><b>Bidder Name: </b>${e.bidderName}</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Amount: </b>${e.amount}kr</p>
    </div>
    <div class="card-title col-6">
    <p><b>Bid Time: </b>${m}</p>
    </div>
    </div>`}document.getElementById("bid-button").addEventListener("click",E);const w=`${y}${A}${h}/bids`;function E(){const e=document.getElementById("bid-amount").value.trim();localStorage.getItem("username");const c=Math.floor(e);if(e===""){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a bid amount",t.classList.add("alert-danger","m-auto")}else if(e<0){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid bid amount",t.classList.add("alert-danger","m-auto")}else if(e<highestBid){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a higher bid amount",t.classList.add("alert-danger","m-auto")}else if(e.typeof!=="number"){const t=document.getElementById("bidAmountAlert");t.innerHTML="Please enter a valid number",t.classList.add("alert-danger","m-auto")}else{const t=document.getElementById("bidAmountAlert");t.innerHTML=""}console.log(c);const d={amount:c};console.log(d);const l=typeof d;console.log(l);async function u(t,m){const p=localStorage.getItem("accessToken");try{const g={method:"POST",headers:{Authorization:`Bearer ${p}`,"Content-Type":"application/json"},body:JSON.stringify(m)},f=await fetch(t,g),S=await f.json();console.log(S),f.ok&&(bidAmountAlert.innerHTML="Bid placed successfully",bidAmountAlert.classList.remove("alert-danger"),bidAmountAlert.classList.add("alert-success"),setTimeout(()=>{window.location.reload()},2e3))}catch(g){console.warn(g)}}u(w,d),console.log(l)}const b=n.seller.name;console.log(b),b==v&&o==="Ended"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg disabled" id="expired">Expired</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`),b==v&&o==="Active"&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <button class="btn btn-secondary btn-lg" id="edit">Edit</button>
    <button class="btn btn-danger btn-lg" id="delete">Delete</button>

    </div>`),!v&&!P&&(bidButtonSection.innerHTML=`
    <div class="d-flex justify-content-center col-6 m-auto gap-2">
    <a href="login.html"><button class="btn btn-outline-primary btn-lg" id="edit">Login To Bid</button></a>

    </div>`);const x=n.media!=""?`${n.media}`:"https://via.placeholder.com/150",M=n.description!=""?`${n.description}`:" No description available:";let I=`
  <div class="card d-flex m-1 col-lg-5 col-12 border-0">
    <div class="card-img-top" style:max-height="20px">
      <img class="img-thumbnail mx-auto" src="${x}" alt="" srcset="" width="100%" />
    </div>
  </div>
  <div class="card col-lg-6 col-12 border-0">
    <div class="card-title fs-4 p-2 col-12 fw-bold">Title:${n.title}</div>

    <div class="card-info p-2 col-12"> 
      <p>
      <b>Description: </b>${M} 
      </p>
    </div>

    <div
      class="card-title d-flex justify-content-start border-0 flex-wrap m-2 flex-column"
    >
   <div class="card-title">
    <p><b>Ends At: </b>${s}</p>
    </div>
    <div class="card-title" id="countdown">
    <p><b>Ends In: </b><span class="px-2">${L}D</span><span>${T}H</span> <span>${$}M</span></p>
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
  `;i.innerHTML=I}
