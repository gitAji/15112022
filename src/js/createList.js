

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const postEndPoint = "/auction/listings";
const createPostUrl = `${API_BASE_URL}${postEndPoint}`;

const title = document.getElementById('title');
const description = document.getElementById('description');
const tags = document.getElementById('tags');
const media = document.getElementById('media');
const endsAt = document.getElementById('end-time');
const form= document.getElementById('post-form');

const titleError = document.getElementById('title-error');
const descriptionError = document.getElementById('description-error');
const tagsError = document.getElementById('tags-error');
const mediaError = document.getElementById('media-error');
const endsAtError = document.getElementById('end-time-error');
const userMessage = document.getElementById('userMessage');

const post = document.getElementById('post');
const accessToken = localStorage.getItem('accessToken');

export function createPost() {
    post.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('form is submitted!');
            console.log(accessToken);
         
            const currentDate = new Date();
           
                var validation  = true;
                if(title.value.trim() === ""){
                    titleError.innerHTML = "Title is required";
                    validation = false;
                }
                else{
                    titleError.innerHTML = "";
                }

                if(description.value.trim() === ""){
                    descriptionError.innerHTML = "Description is required";
                    validation = false;
                }
                else{
                    descriptionError.innerHTML = "";
                }

                if(tags.value.trim() === ""){
                    tagsError.innerHTML = "Tags is required";
                    validation = false;
                }
                else{
                    tagsError.innerHTML = "";
                }

                if(media.value.trim() === ""){
                    mediaError.innerHTML = "Media is required";
                    validation = false;
                }
                else{
                    mediaError.innerHTML = "";
                }
               
                if(endsAt.value.trim() === ""){
                    endsAtError.innerHTML = "End time is required";
                    validation = false;
                }
            
                else{
                    endsAtError.innerHTML = "";
            
                }
        validation = true;
                
            const titleValue = title.value.trim();
            const descriptionValue = description.value.trim();
            const tagsValue = tags.value.trim().split(',');
            const mediaValue = media.value.trim().split(',');
            const endsAtValue = endsAt.value.trim();

            
            const date= new Date(endsAtValue);
            const endDate = date.toISOString();
           
            console.log(endDate);

           
    

            const postData = {
                title: titleValue,
                description: descriptionValue,
                tags: tagsValue,
                media: mediaValue,
                endsAt: endDate
            };
    console.log(postData);

            async function createAPost(url, data) {

                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,

                        },
                        body: JSON.stringify(data),
                    };
                    console.log(url, data, options);
    
                    const response = await fetch(url, options);
                    console.log(response);
                    const answer = await response.json();
                    console.log(answer);
                    if (!response.ok) {
                        userMessage.innerHTML = `
                        <div class="text-danger">
                            <b>Please check image url </b>
                        </div>
                        `;
                    }
                    else if (response.ok) {
                        userMessage.innerHTML = `
                        <div class="text-success">
                            <b>Post created successfully</b>
                        </div>
                        `;
                        setTimeout(() => {
                           form.reset ();
                           userMessage.innerHTML = "";
                        }, 2000);

                        }
                
                    
                } catch (error) {
                    console.warn(error);
                }
               

            }
            createAPost(createPostUrl, postData);
        });
    }
   

createPost();

