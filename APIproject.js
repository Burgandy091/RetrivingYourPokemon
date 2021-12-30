
const baseURL = 'https://pokeapi.co';


function fetchPokemon(results) {
    
    fetch(`${baseURL}/api/v2/pokemon`)
    .then(response => response.json())
    .then(jsonData => {
        
        listPokemon(jsonData.results);
        
    })
}


function listPokemon(pokemonData) {
    console.log(pokemonData);
    
    for (results in listPokemon){

        let pokemonData = document.createElement(i);
        pokemonElement.innerText = (i);

        resultsElement.appendChild(pokemonElement);

        let formElement = document.getElementById('search-pokemon');
        let listElement = document.getElementById('pokemon-list');



        
                const link = document.querySelector('i');
                let i = pokemonData;
                
                document.getElementById('search-form');innerText = pokemonData;
        
                
                let id = document.getElementById('search-form');
                
                console.log(pokemonData[pokemon].name)
                
                // {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ}



        
        
                   
        
    
    
    
    }
}

fetchPokemon();





