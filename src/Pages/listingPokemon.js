import { useEffect, useState } from "react";
import { AddToPokedex } from "../Api/addToPokedex";
import { GetAll } from "../Api/pokemon";


function ListingPokemon(props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = GetAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.img} />
                <h2>{pokemon.name}</h2>
                <h2>{pokemon.type1}</h2>
                <h2>{pokemon.type2}</h2>
                <button onClick={()=>AddToPokedex(pokemon)}>Capturer !</button>
            </div>
            })
        }
        </div>
    </div>;
}
export default ListingPokemon;