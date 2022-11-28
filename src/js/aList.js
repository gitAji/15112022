const params = new URLSearchParams(document.location.search);
const id = params.get("id");

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";
const listingsEndPoint = "/auction/listings";
const listingsUrl = `${API_BASE_URL} + ${listingsEndPoint}`;
const aSinglePostURL=`${listingsUrl}+${id}`;

const out=document.getElementById('a-post');

async function getAPost (url) {
    try {
        const accessToken = localStorage.getItem('accessToken'); 
        const options = {
            method: 'GET', 
            headers : {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        console.log(url);
        console.log(accessToken);

        const response = await fetch(url,options); 
        console.log(response);
        const posts = await response.json();
        console.log(posts);
        listAPost(posts,out);
       

    } catch(error) {
        console.warn(error);
    }
}
getAPost(aSinglePostURL);

export function listAPost(post, out) {
    
    const date = new Date(post.created);
    const postedDate = date.toLocaleString();
    document.title = post.title;
    let newDiv = `<div class="card d-flex m-1 col-lg-5 col-12 border-0">
    <div class="card-img">
      <img class="" src="img/shoes.png" alt="" srcset="" width="100%" />
    </div>
  </div>
  <div class="card col-lg-6 col-12 border-0">
    <div class="card-title fs-4 p-2 col-12 fw-bold">Men All Star shoes</div>

    <div class="card-description p-2 col-12">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        maiores dolorum. Molestias. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Sequi, maiores dolorum. Molestias
      </p>
    </div>
    <div
      class="card-title d-flex justify-content-start border-0 flex-wrap m-2"
    >
      <h4>Current Price:</h4>
      <h4>1999 kr</h4>
      <div class="card-group">
        <input
          type="text"
          name="bid"
          id="bid"
          placeholder="Place your bid"
          class="m-2"
        />
        <input
          type="button"
          value="Place Bid"
          class="btn btn-primary px-5 m-2"
        />
      </div>
    </div>
    <div class="card-body">
      <p>This item has (0) bids at the movement</p>
    </div>
    <div class="card-footer bg-white">
      <div class="alert alert-warning" role="alert">
        <strong>Please enter higher bid than the current bid</strong>
      </div>
      <div class="user-bids">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Bid</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>300kr</td>
              <td>Out bided</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>400kr</td>
              <td>Out bided</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>500kr</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;

  out.innerHTML = newDiv;

}
