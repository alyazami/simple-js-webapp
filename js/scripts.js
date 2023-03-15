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
        document.write(pokemonList[i].name + ' ( '+ pokemonList[i].height +') ' + ' : Wow, that\'s big\!' + '<br>');
        namePrinted = true;
    } else if ( pokemonList[i].height< 0.5 ) {
        document.write(pokemonList[i].name + ' ( '+ pokemonList[i].height + ') ' + ' : What a tiny pokemon\!' + '<br>');
        namePrinted = true;
    }
    if (!namePrinted) {  // print the name and height only if it's not already printed above
        document.write(pokemonList[i].name + ' ('+ pokemonList[i].height +') ' + '<br>');
    }
}