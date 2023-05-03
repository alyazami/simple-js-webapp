// Create a self-invoking function that returns an object with methods
let pokemonRepository = (function () {
   // Create an array of pokemon objects
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Add a pokemon object to the repository array
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Return the repository array
  function getAll() {
    return pokemonList;
  }

    // Add a list item for a pokemon object
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
     // Add a click event listener to the button that calls the showDetails() function with the pokemon object as a parameter
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
  }

  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      item.imageUrl = details.sprotes.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e){
      console.log(item)
    });
  }


  // Log a pokemon object to the console
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function(){
      console.log(item);
    });
  }

   // Return an object with the add(), getAll(), and addListItem() methods
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();




// Loop over the pokemon objects in the repository array using the getAll() method and add a list item for each one using the addListItem() method
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
  });
});