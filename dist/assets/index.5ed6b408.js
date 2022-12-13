import"./alert.29446747.js";import"./listings.f60426cc.js";import"./credits.838e7512.js";const d=new URLSearchParams(document.location.search);d.get("id");const a="https://nf-api.onrender.com/api/v1",r="/auction/listings?limit=12&sort=created&sortOrder=desc",m=`${a}${r}`,o=document.getElementById("all-lists");document.getElementById("post-image");const p=document.getElementById("login"),g=document.getElementById("logout"),u=document.getElementById("myIBuy");let h=[];const f='<a href="login.html">Logout</a>',v=' <a href="profile.html">My iBuy</a>';localStorage.getItem("accessToken")?(g.innerHTML=f,u.innerHTML=v):p.innerHTML='<a href="login.html">Login</a>';async function y(i){try{const s=await(await fetch(i,{method:"GET"})).json();h=s,B(s,o),ownLists(s)}catch{}}y(m);function B(i){o.innerHTML="";let e="";for(let t of i){const n=new Date(t.endsAt).toLocaleString();document.title=t.title;const l=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",c=t.description==null?"This Post has no description":`${t.description}`;e+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
    <a href="/alist.html?id=${t.id}">
        <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${l}" alt="" srcset="" width="100%" />
        </div>
        <div class="card-title fs-4 d-flex p-2 col-12 fw-bold flex-wrap">
        ${t.title}
        </div>
      </a>
   
      <div class="card-description d-flex p-2 col-12">
        <p>
        ${c}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Bids: ${t._count.bids}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Tags: ${t.tags}
        </p>
  
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
         Ends At: ${n}
        </p>
        </div>
    </div>
       `}o.innerHTML=e}document.getElementById("all-lists");document.getElementById("searchInput");document.getElementById("searchBtn");
