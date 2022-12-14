import axios from "axios";

export const CreateToPokemon =  async (pokemon) => {
    console.log('Got body_insert:', pokemon.name, pokemon._id, pokemon.type);
    const url = 'http://localhost:4444/pokemon/insert';
    let name = pokemon.name
    let type1 = pokemon.type1
    let type2 = pokemon.type2
    axios.post(url,{name,type1,type2})
    .then(response => console.log(response.status))
    .catch(err => console.warn(err));
}


{/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} placeholder="First name" />
                        <select {...register("category", { required: true })}>
                            <option value="">Select...</option>
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                        </select>
                        <textarea {...register("aboutYou")} placeholder="About you" />
                        <button type="submit" onClick={()=>CreateToPokemon(pokemon)}>Creer !</button>
                    </form> */}