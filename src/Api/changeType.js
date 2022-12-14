export const TypePokemon = async (pokemon, newtype) => {
    console.log('Got body_update:', pokemon.name, newtype);
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'pokemontoupdate':pokemon.name,
                'type1':document.getElementById(newtype).value
            })
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const TypePokemon2 = async (pokemon, newtype) => {
    console.log('Got body_update:', pokemon.name, newtype);
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'pokemontoupdate':pokemon.name,
                'type2':document.getElementById(newtype).value
            })
        }
    )
    const pokemons = await response.json()
    return pokemons
}