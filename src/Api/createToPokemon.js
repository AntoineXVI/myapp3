export const CreateToPokemon = async (newname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'name':document.getElementById(newname).value,
                'type1':document.getElementById(newtype1).value,
                'type2':document.getElementById(newtype2).value
            })
        }
    )
    const pokemonsUpdate = await response.json()
    return pokemonsUpdate
}