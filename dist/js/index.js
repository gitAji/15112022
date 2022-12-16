import"./nav.js";import"./credits.js";const p=new URLSearchParams(document.location.search);p.get("id");localStorage.getItem("accessToken");localStorage.getItem("username");const m="https://nf-api.onrender.com/api/v1",u="/auction/listings?limit=30&sort=created&sortOrder=desc",g=`${m}${u}`,c=document.getElementById("all-lists");document.getElementById("post-image");let n=[];async function f(i){try{const s=await(await fetch(i,{method:"GET"})).json();n=s,a(s,c),ownLists(s)}catch{}}f(g);function a(i){c.innerHTML="";let e="";for(let t of i){const o=new Date(t.endsAt).toLocaleString();document.title=t.title;const l=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",r=t.description==null?"This Post has no description":`${t.description}`;e+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
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
        ${r}
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
         Ends At: ${o}
        </p>
        </div>
    </div>
       `}c.innerHTML=e}const d=document.getElementById("searchText");d.addEventListener("keyup",h);function h(){const i=d.value.trim(),e=n.filter(t=>{const s=t.title.toLowerCase(),o=i.toLowerCase();return s.startsWith(o)||s.includes(o)});a(e)}
