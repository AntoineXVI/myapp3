export const TypePokemon = async (pokemon, newtype) => {
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
    const pokemonsUpdate = await response.json()
    return pokemonsUpdate
}

export const TypePokemon2 = async (pokemon, newtype) => {
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
    const pokemonsUpdate = await response.json()
    return pokemonsUpdate
}