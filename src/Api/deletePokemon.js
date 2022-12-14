export const DeletePokemon =  async (pokemon) => {
    console.log('Got body_delete:', pokemon.name, pokemon._id);
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'name':pokemon.name,
                'type':pokemon.type
            })
        }
    )
    const pokemonsUpdate = await response.json()
    return pokemonsUpdate
}