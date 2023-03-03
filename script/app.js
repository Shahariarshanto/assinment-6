
// get the data from the api 
fetch(`https://openapi.programming-hero.com/api/ai/tools`)
.then(res=> res.json())
.then(data=> displayCards(data.data.tools));


const displayCards = (data)=>{
    const cards = document.getElementById("card-container")
    console.log(data[0]);
    data.map(card =>{

        const [one, two, three] = card.features;
       
        const cardDiv = document.createElement("div");

       
        cardDiv.classList.add("max-w-sm","border","border-gray-200","rounded-lg","shadow")
        cardDiv.innerHTML = `
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img
            class="rounded-t-lg"
            src=${card.image}
            alt=""
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Features
            </h5>

            <ol class="list-decimal mb-3 text-gray-700">
              <li class="ml-4">${one}</li>
              <li class="ml-4">${two}</li>
              <li class="ml-4">N${three}</li>
            </ol>

            <hr class="shadow my-5 mx-1" />
          <div class="p-5 my-4 bottom-0 flex justify-between items-center">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              ${card.name}
              </h5>
              <p>${card.published_in}</p>
            </div>
            <button
            id="modal-btn"
            onclick="detailsBtn('${card.id}')"
              
              class="inline-flex items-center pl-2 pr-4 py-2 text-sm text-center rounded-full bg-red-100 text-rose-500"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          </div>
        </div>

        <button id="modal-btn">Open Modal</button>

        `
        cards.appendChild(cardDiv)

    })

}


// Card Details Button
const detailsBtn = (id)=>{
  console.log(id);

  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  .then(res=> res.json())

  .then(data=> displayModal(data.data))
    

}

function displayModal (data){
  const {tool_name} = data;
  // document.getElementById("modal-title").innerText = tool_name;
  // document.getElementById("description").innerText = data.description;

}