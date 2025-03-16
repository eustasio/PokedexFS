
import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbizarre",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "mew",
      imgSrc:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
  }
];

function App() {
  const [pokemonName, setPokemonName] = useState( 'bulbizarre');
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
  
  
  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
   
  }
  
  const handleClick = () => {
    setPokemonName( 'mew');
  } 
  
  return (
    <div>
    <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={handleClick}>
      changer pokemon
        </button>
        <button type="button" onClick={() => setPokemonName("bulbizarre")}>
          retour
          </button>
       
      </div> 
     
  );
}
  
export default App;
