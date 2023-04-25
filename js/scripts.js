// Create a self-invoking function that returns an object with methods
let pokemonRepository = (function () {
   // Create an array of pokemon objects
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

    // Add a pokemon object to the repository array
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Return the repository array
  function getAll() {
    return repository;
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

  // Log a pokemon object to the console
  function showDetails(pokemon) {
    console.log(pokemon);
  }

   // Return an object with the add(), getAll(), and addListItem() methods
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Add a new pokemon object to the repository array using the add() method
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

// Log the repository array to the console using the getAll() method
console.log(pokemonRepository.getAll());

// Loop over the pokemon objects in the repository array using the getAll() method and add a list item for each one using the addListItem() method
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
