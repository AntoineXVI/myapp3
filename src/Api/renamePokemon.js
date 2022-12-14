export const RenamePokemon = async (pokemon, newname) => {
    console.log('Got body_update:', pokemon.name, newname);
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'pokemontoupdate':pokemon,
                'name':document.getElementById(newname).value
            })
        }
    )
    const pokemons = await response.json()
    return pokemons
}