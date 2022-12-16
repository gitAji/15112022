import"./nav.6db2393a.js";const g=localStorage.getItem("accessToken"),d=localStorage.getItem("username"),l="https://nf-api.onrender.com/api/v1",p="/auction/profiles/",u=`${l}${p}${d}`,v=`${l}${p}${d}/media`,$=document.getElementById("user");async function h(e){try{const t={method:"GET",headers:{Authorization:`Bearer ${g}`}},s=await(await fetch(e,t)).json();f(s),bidsWon(s)}catch(t){console.warn(t)}}h(u);function f(e){let a=`
    <div class="container card gap-3 justify-content-between">
    <div class="row">
      <div class=" py-3 col-lg-3">
            <img class="img-thumbnail p-3 border-0" src="${e.avatar!=""?`${e.avatar}`:"https://via.placeholder.com/150"}" alt="" srcset="" width="100%" id="avatar" />
            <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#avatarModal"> Edit Avatar</button>

            </div>
        <div class="card-body bg-gray p-3 col-lg-9">
            <h5 class="card-title">Name: ${e.name}</h5>
            <p class="card-text">Email: ${e.email}</p>
            <p class="card-text">Credits: ${e.credits}</p>
            <p class="card-text">Wins: ${e.wins.length}</p>
            <p class="card-text">Listings: ${e._count.listings}</p>
            </div>
    </a>

</div>`;$.innerHTML=a}const b=document.getElementById("avatarUrl"),w=document.getElementById("save"),r=document.getElementById("update-message");w.addEventListener("click",y);function y(){const e={avatar:b.value.trim()};if(e.avatar===""){r.innerHTML=`
    <div class="text-danger">
    <p>Please enter a valid url</p>
    </div>
  `;return}async function t(a,s){try{const n={method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"application/json"},body:JSON.stringify(s)},c=await fetch(a,n),i=await c.json();return c.ok?(r.innerHTML=`
        <p>Avatar updated successfully</p>
      `,setTimeout(()=>{window.location.reload()},2e3)):r.innerHTML=`
        <div class="text-danger">
        <p>Avatar update failed!</p>
        </div>
      `,i}catch{}}t(v,e)}const T=document.getElementById("active-listings"),L=localStorage.getItem("username"),E=localStorage.getItem("accessToken"),A="https://nf-api.onrender.com/api/v1",I="/auction/profiles/",B=`${A}${I}${L}/listings`;async function S(e){try{const t={method:"GET",headers:{"Content-Type":"application/json",authorization:`Bearer ${E}`}},s=await(await fetch(e,t)).json();k(s,T)}catch{}}S(B);function k(e,t){for(let a of e){const s=new Date(a.created).toLocaleString(),o=new Date(a.endsAt).toLocaleString();document.createElement("div");let n=`
   
    <div class="card col-lg-3 col-md-6 col-sm-12 ">
    <div class="row">
    <a href="aList.html?id=${a.id}" class="card-link">
        <div class="col-12 align-content-center">
            <img class="img-thumbnail border-0" src="${a.media}" alt="" srcset="" width="100%" id="avatar" />
            </div>
        <div class="card-body bg-gray p-3 col-12">
            <h5 class="card-title">Title: ${a.title}</h5>
            <p class="card-text">Description: ${a.description}</p>
            <p class="card-text">Total Bids: ${a._count.bids}</p>
            <p class="card-text">Created: ${s}</p>
            <p class="card-text">Ends At: ${o}</p>
            
            </div>    </a>
           
    </div>

    `;t.innerHTML+=n}}const P=document.getElementById("bided-lists"),U=localStorage.getItem("accessToken"),D=localStorage.getItem("username"),x="https://nf-api.onrender.com/api/v1",_="/auction/profiles/",j="/bids",M="?_listings=true",C=`${x}${_}${D}${j}${M}`;async function H(e){try{const t={method:"GET",headers:{Authorization:`Bearer ${U}`}},s=await(await fetch(e,t)).json();m(s)}catch(t){console.warn(t)}}H(C);function m(e){for(var t of e){console.log(t);const s=new Date(t.created).toLocaleString(),n=new Date(t.listing.endsAt).toLocaleString(),c=`${t.listing.media}`;let i="";i=`
    <div class="card col-lg-3 col-md-6 col-sm-12 p-3">
    <a href="/alist.html?id=${t.listing.id}">
    <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${c}" alt="" srcset="" width="100%" />
        </div>
    <div class="card-title">
    <p>List Title: ${t.listing.title}</p>
    </div>
    <p>Amount: ${t.amount}</p>
    <p>Created: ${s}</p>
    <p>Ends At: ${n}</p>
    <button class="btn btn-outline-primary">Check Who Won</button>
    </div>
    </a>
    </div>`,P.innerHTML+=i}}m();
