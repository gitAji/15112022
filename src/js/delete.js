const params = new URLSearchParams(document.location.search);
const id = params.get("id");
const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/listings";
const deleteUrl = `${API_BASE_URL}${listingsEndPoint}${id}`;
 const deleteBtn= document.getElementById("delete");
console.log(deleteBtn);


async function deleteList(url){
try {
    const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
console.log(url, options);

    const response = await fetch(url, options);
    //console.log(response);
    const data = await response.json();
    console.log(data);
    if(response.ok)
    {
        alert("your post deleted now");
    }

  } catch (error) {
    //console.warn(error);
  }
}
deleteList(deleteUrl);


deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("delete");
    const confirmation=confirm("Are you sure you want to delete this post?");
    if (confirmation){
        deleteList(deleteUrl);
    }
});