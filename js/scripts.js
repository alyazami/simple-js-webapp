let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector(".modal-container");

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

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
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
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e){
      console.log(item)
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      // Create modal container
      modalContainer.innerHTML = "";
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContainer.appendChild(modalContent);

      // Create close button
      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerText = "X";
      modalContent.appendChild(closeButton);

      // Add event listener to close button
      closeButton.addEventListener("click", function () {
        hideModal(modalContainer);
      });

      // Create Pokemon name element
      const nameElement = document.createElement("h2");
      nameElement.innerText = item.name;
      modalContent.appendChild(nameElement);

      // Create Pokemon height element
      const heightElement = document.createElement("p");
      heightElement.innerText = "Height: " + item.height;
      modalContent.appendChild(heightElement);

      // Create Pokemon image element
      const imageElement = document.createElement("img");
      imageElement.classList.add("pokemon-image");
      imageElement.setAttribute("src", item.imageUrl);
      modalContent.appendChild(imageElement);

      showModal(modalContainer);
    });
  }

  function showModal(modal) {
    modal.style.display = "block";
    modal.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        hideModal(modal);
      }
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        hideModal(modal);
      }
    });
  }
    window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  function hideModal(modal) {
    modal.style.display = "none";
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
  });
});