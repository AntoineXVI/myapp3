import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";



export function ModifyToPokemon(pokemon) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:4444/pokemon/update';
        let name = register("Name")
        let type1 = register("category1")
        let type2 = register("category2")
        axios.post(url,{name,type1,type2})
        .then(response => console.log(response.status))
        .catch(err => console.warn(err));
        //On peut transformer les données en JSON pour les envoyer dans notre appel
        //JSON.stringify(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="name" defaultValue={pokemon.name} />
        <p>select type1...</p>
        <select {...register("category1", { required: true })}>
            <option value="" selected>{pokemon.type1}</option>
            <option value="A">Acier</option>
            <option value="B">Sol</option>
            <option value="B">Plante</option>
        </select>
        <p>select type2...</p>
        <select {...register("category2", { required: true })}>
            <option value="" selected>{pokemon.type2}</option>
            <option value="A">Acier</option>
            <option value="B">Sol</option>
            <option value="B">Plante</option>
        </select>
        <p>{data}</p>
        <button type="submit">Valider</button>
        </form>
    );
    }React