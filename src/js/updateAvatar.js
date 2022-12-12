
import { profileData } from "./profile";
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
    };
      //console.log(json);
      return json;
  
    } catch (error) {
      console.log(error);
    }
  }
  updateAvatar(avatarUpdateUrl,data);
  
}




