import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TypePokemon, TypePokemon2 } from "../Api/changeType";
import { DeletePokemon } from "../Api/deletePokemon";
import { GetAll } from "../Api/pokemon";
import { RenamePokemon } from "../Api/renamePokemon";

function ManagePokemon(){
    const [ pokemons, setPokemons ] = useState([]);
    const [count, setCount] = useState(0);
    const { register, handleSubmit } = useForm();

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = GetAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
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
                <input type="text" id = {key} name ="name"  placeholder="nouveau nom"/>
                <button onClick={()=>{RenamePokemon(pokemon, key); setCount(count+1);}} > Renommer ! {pokemon.name}</button>
                <h2>type :</h2>
                <h3>{pokemon.type1}</h3>
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <button onClick={()=>{TypePokemon(pokemon, key); setCount(count+1);}}>Changer le type de {pokemon.name} !</button>
                <h3>{pokemon.type2}</h3>
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <button onClick={()=>{TypePokemon2(pokemon, key); setCount(count+1);}}>Changer le 2nd type  de {pokemon.name} !</button>
                <button onClick={()=>{DeletePokemon(pokemon); setCount(count+1);}}>Supprimer !</button>
            </div>
            </>
            })
        }
        </div>
    </div>;
}

export default ManagePokemon;