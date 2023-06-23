import {useCombinedStore} from "./store"
import {useEffect} from "react"

export const PokemonList = () => {
    const getPokemons = useCombinedStore(state => state.fetchPokemon)
    const pokemonList = useCombinedStore(state => state.pokemon)

    useEffect(() => {
        getPokemons()
    }, [getPokemons])

    if (!pokemonList.length) {
        return "Loading"
    }

    return (
        <ol>
            {pokemonList.map(item => {
                return <li key={item.name}>{item.name}</li>
            })}
        </ol>
    )
}