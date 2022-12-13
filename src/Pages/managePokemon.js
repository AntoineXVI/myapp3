import { useEffect, useState } from "react";
import { DeletePokemon } from "../Api/deletePokemon";
import { GetAll } from "../Api/pokemon";

function ManagePokemon(props){
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
            return <>
            <h1>ManagePokemon</h1>;
            <div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.img} />
                <h2>name :</h2>
                <h3>{pokemon.name}</h3>
                <h2>type :</h2>
                <h3>{pokemon.type1}</h3>
                <h3>{pokemon.type2}</h3>
                <button onClick={()=>DeletePokemon(pokemon)}>Supprimer !</button>
            </div>
            </>
            })
        }
        </div>
    </div>;
}

export default ManagePokemon;