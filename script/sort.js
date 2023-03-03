  // get the data from the api 

  let array = [];
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  .then(res=> res.json())
  .then(data=> array.data = data.data.tools);

 const sortObjectsByDateAscending = (array) =>{

  // Sort the array of objects by the date property in ascending order
  array.sort((a, b) => new Date(a["published_in"]) - new Date(b["published_in"]));

  document.getElementById("card-container").innerHTML = "";

  displayCards(array)
}

