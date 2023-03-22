// Create an Immediately Invoked Function Expression (IIFE) to wrap the pokemonList array
let pokemonRepository = (function () {
  let pokemonList = [
    {
        name: 'Barbasure',
        height: 7,
        type: ['grass', 'poison']
    },
    {
        name: 'Pikatchu',
        height: 0.4,
        type: ['static', 'lightningrod']

    },
    {
        name: 'Charmeleon',
        height: 1.1,
        type: ['blaze', 'solar-power']
    }
  ];

  // function to return the entire pokemonList array
  function getAll() {
    return pokemonList;
  }

  // function to add a new item to the pokemonList array
  function add(item) {
    // validate that item is an object with expected keys
    if (typeof item === 'object' && Object.keys(item).every(key => ['name', 'height', 'type'].includes(key))) {
      pokemonList.push(item);
    } else {
      console.error('Invalid input for adding to pokemonList:', item);
    }
  }

  // return an object with the two functions as properties
  return {
    getAll: getAll,
    add: add
  };
})();

// Use the getAll function to retrieve the pokemonList array and iterate over it
pokemonRepository.getAll().forEach(function(pokemon) {
  let namePrinted = false;  // flag variable to keep track of whether name is already printed
  if (pokemon.height > 6) {
    document.write('<span class="pokemon-highlight">' + pokemon.name + ' ('+ pokemon.height +')</span>');
    document.write('<span class="pokemon-message"> : Wow, that\'s big\!</span>' + '<br>');
  } else if (pokemon.height < 0.5) {
    document.write('<span class="pokemon-highlight">' + pokemon.name + ' ('+ pokemon.height +')</span>');
    document.write('<span class="pokemon-message"> : What a tiny pokemon\!</span>' + '<br>');
    namePrinted = true;
  } else {
    document.write('<span class="pokemon">' + pokemon.name + ' ('+ pokemon.height +')</span>' + '<br>');
  }
});

// The pokemonList array cannot be accessed directly from outside the IIFE, but can be modified using the add function
pokemonRepository.add({
  name: 'Bulbasaur',
  height: 0.7,
  type: ['grass', 'poison']
});

// Trying to add a string to pokemonList results in an error
pokemonRepository.add('Pidgey');
