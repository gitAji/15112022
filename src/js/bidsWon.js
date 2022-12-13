

const bidsWon= document.getElementById('bids-won');
const accessToken = localStorage.getItem('accessToken');
const userName = localStorage.getItem('username');

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const profileEndPoint = "/auction/profiles/";
const item="/auction/listings/";
const itemUrl=`${API_BASE_URL}${item}`;
const profileUrl = `${API_BASE_URL}${profileEndPoint}${userName}`;


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
        console.log(response);
        const profile = await response.json();
   
        listOfBidsWon(profile);
       
        console.log(profile);
    } catch (error) {
        console.warn(error);
    }
}
profile(profileUrl);
// getting the result in the console log
/*
function listOfBidsWon(profile){
   for(let win of profile.wins){
console.log(win);
    }
   
 let newDiv = `
    <div class="container card">
    <div class="row">
<p>wins:${win}</p>

      </div>
</div>`;

   bidsWon.innerHTML = newDiv;

   
   
}

listOfBidsWon();
*/