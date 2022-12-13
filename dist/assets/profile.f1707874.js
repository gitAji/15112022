import"./register.7a3f3a27.js";const r=document.getElementById("active-listings"),s=localStorage.getItem("username"),d=localStorage.getItem("accessToken"),g="https://nf-api.onrender.com/api/v1",p="/auction/profiles/",c=`${g}${p}${s}/listings`;console.log(s);console.log(c);async function m(e){try{const o={method:"GET",headers:{"Content-Type":"application/json",authorization:`Bearer ${d}`}};console.log(e);const t=await fetch(e,o);console.log(t);const n=await t.json();console.warn(n),w(n,r)}catch{}}m(c);function w(e,o){console.log(e);for(let t of e){const n=new Date(t.created).toLocaleString(),a=new Date(t.endsAt).toLocaleString();document.createElement("div"),console.log(t.title);let l=`
    <a href="aList.html?id=${t.id}" class="card-link">
    <div class="card gap-5 justify-content-between">
    <div class="row">
        <div class=" py-3 col-lg-3">
            <img class="img-thumbnail p-3 border-0" src="${t.media}" alt="" srcset="" width="100%" id="avatar" />
            </div>
        <div class="card-body bg-gray p-3 col-lg-9">
            <h5 class="card-title">Title: ${t.title}</h5>
            <p class="card-text">Description: ${t.description}</p>
            <p class="card-text">Total Bids: ${t._count.bids}</p>
            <p class="card-text">Created: ${n}</p>
            <p class="card-text">Ends At: ${a}</p>
            
            </div>    </a>
           <div class="card-footer bg-gray p-3 col-lg-9">
           </div>
           
    </div>

    `;o.innerHTML+=l}}const f=document.getElementById("bids-won"),v=localStorage.getItem("accessToken"),$=localStorage.getItem("username"),h="https://nf-api.onrender.com/api/v1",u="/auction/profiles/",y=`${h}${u}${$}`;async function L(e){try{const o={method:"GET",headers:{Authorization:`Bearer ${v}`}},t=await fetch(e,o);console.log(t);const n=await t.json();i(n),console.log(n)}catch(o){console.warn(o)}}L(y);function i(e){for(let t of e.wins)console.log(t);let o=`
    <div class="container card">
    <div class="row">
<p>wins:${win}</p>

      </div>
</div>`;f.innerHTML=o}i();
