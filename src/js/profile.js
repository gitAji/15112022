import { getListings } from "./listings.mjs";
const accessToken = localStorage.getItem("accessToken");
const userName = localStorage.getItem("username");

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const profileEndPoint = "/auction/profiles/";
const profileUrl = `${API_BASE_URL}${profileEndPoint}${userName}`;
const avatarUpdateUrl = `${API_BASE_URL}${profileEndPoint}${userName}/media`;


const user = document.getElementById("user");
const avatar = document.getElementById("avatar");
const edit = document.getElementById("edit");
const profileName = document.getElementById("name");
const email = document.getElementById("email");
const credit = document.getElementById("credit");
const wins = document.getElementById("wins");
const lists = document.getElementById("lists");

/**
 * @param {url}
 * @returns {profileData}
 * 
 */
export async function getProfile(url) {
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
        const data = await response.json();
   
        profileData(data);
       
        console.warn(data);
    } catch (error) {
        console.warn(error);
    }
}
getProfile(profileUrl);


export function profileData(data) {
  
const profilePicture = data.avatar !="" ?`${data.avatar}`: "https://via.placeholder.com/150"; 

    let newProfile = `
    <div class="container card gap-3 justify-content-between">
    <div class="row">
      <div class=" py-3 col-lg-3">
            <img class="img-thumbnail p-3 border-0" src="${profilePicture}" alt="" srcset="" width="100%" id="avatar" />
            <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#avatarModal"> Edit Avatar</button>

            </div>
        <div class="card-body bg-gray p-3 col-lg-9">
            <h5 class="card-title">Name: ${data.name}</h5>
            <p class="card-text">Email: ${data.email}</p>
            <p class="card-text">Credits: ${data.credits}</p>
            <p class="card-text">Wins: ${data.wins.length}</p>
            <p class="card-text">Listings: ${data._count.listings}</p>
            </div>
    </a>

</div>`;

    user.innerHTML = newProfile;

   
   
}

/*
* update the profile avatar using module
*/
const avatarUrl= document.getElementById("avatarUrl");
const saveBtn= document.getElementById("save");
const avatarUpdateMessage = document.getElementById("update-message");

saveBtn.addEventListener("click", updateAvatar);

export function updateAvatar() {
 
  const data = {
    avatar: avatarUrl.value.trim(),
  };
  console.log(data);

  if (data.avatar === "") {
    avatarUpdateMessage.innerHTML = `
    <div class="text-danger">
    <p>Please enter a valid url</p>
    </div>
  `;
  return;
  }


  // if statement to validate the url



async function updateAvatar(url, data) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const options = {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
      const response = await fetch(url, options);
      //console.log(response);
      const json = await response.json();
      
      if (response.ok) {
        avatarUpdateMessage.innerHTML = `
        <p>Avatar updated successfully</p>
      `;
      setTimeout(() => {
        window.location.reload();
        //console.log(json);
       
      }, 2000);
      }
      else{
        avatarUpdateMessage.innerHTML = `
        <div class="text-danger">
        <p>Avatar update failed!</p>
        </div>
      `;
      }
      //console.log(json);
      return json;
  
    } catch (error) {
      //console.log(error);
    }
  }
  updateAvatar(avatarUpdateUrl,data);
  
}



