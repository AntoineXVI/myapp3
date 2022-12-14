import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AddToPokedex } from "../Api/addToPokedex";
import { GetAll } from "../Api/pokemon";
import axios from "axios";
// import { AddPokemon } from "../Api/createToPokemon";


function ListingPokemon(props) {
    const [ pokemons, setPokemons ] = useState([]);
    const [count, setCount] = useState(0);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

    const url = 'http://localhost:4444/pokemon/insert';
    let name = data.name
    let type1 = data.type1;
    let type2 = data.type2;
    axios.post(url,[{name,type1,type2}])
    .then(response => console.log(response.status))
    .catch(err => console.warn(err));
}

    useEffect(() => {
    const pokemonsFetched = GetAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
        <div className="flex">
            <form onSubmit ={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="First name" />
                <input {...register("type1")} placeholder="type1" />
                <input {...register("type2")} placeholder="type2" />
                <button onClick={()=>{ setCount(count+1)}}>Create! </button>
            </form>
        {
        pokemons.map((pokemon,key) =>{
        return <div key={key} className="bloc-pokemon">
            <img className="avatar" src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.type1}</h2>
            <h2>{pokemon.type2}</h2>
            <button onClick={()=>{AddToPokedex(pokemon); setCount(count+1);}}>Capturer !</button>
        </div>
        })
        }
        </div>
        </div>;
}
export default ListingPokemon;