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
]

// printing pokemon name and height & hightlight the one with big and small hieght value 
for (let i=0; i < pokemonList.length; i++){
    let namePrinted = false;  // flag variable to keep track of whether name is already printed
if (pokemonList[i].height > 6) {
  document.write('<span class="pokemon-highlight">' + pokemonList[i].name + ' ('+ pokemonList[i].height +')</span>');
  document.write('<span class="pokemon-message"> : Wow, that\'s big\!</span>' + '<br>');
  namePrinted = true;
} else if (pokemonList[i].height < 0.5) {
  document.write('<span class="pokemon-highlight">' + pokemonList[i].name + ' ('+ pokemonList[i].height +')</span>');
  document.write('<span class="pokemon-message"> : What a tiny pokemon\!</span>' + '<br>');
  namePrinted = true;
} else {
  document.write('<span class="pokemon">' + pokemonList[i].name + ' ('+ pokemonList[i].height +')</span>' + '<br>');
}
}