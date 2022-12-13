import axios from "axios";

export const DeletePokemon =  async (pokemon) => {
    console.log('Got body_delete:', pokemon.name, pokemon._id, pokemon.type1);
    const url = 'http://localhost:4444/pokemon/delete';
    let name = pokemon.name;
    let id = pokemon._id;
    let type1 = pokemon.type1;
    let type2 = pokemon.type2;
    axios.delete(url,{id,name,type1,type2})
    .then(response => console.log(response.status))
    .catch(err => console.warn(err));

}

