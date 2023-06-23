import { create } from 'zustand'

// export const useCounterStore = create((set, get) => (
//     {
//         pokemon: [],
//         number: 0,
//         increment: () => set(state => ({ number: state.number + 1 })),
//         decrement: () => set(state => ({ number: state.number - 1 })),
//         logNumber: () => console.log(get().number),
//         fetchPokemon: async () => {
//             const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
//             const data = await response.json()
//             console.log(data.results)
//             set(state => ({ pokemon: data.results }))
//         }
//     }
//  ))

 const createPokemonStore = ((set) => (
    {
        pokemon: [],
        fetchPokemon: async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
                .then(response => response.json())
                .then(data => set({pokemon: data.results}))
        }
    }
 ))

 const createCounterStore = ((set, get) => (
    {
        number: 123,
        increment: () => set((state) => ({number: state.number + 1})),
        decrement: () => set((state) => ({number: state.number - 1})),
        logNumber: () => {
            console.log(` Current number value equals ${get().number}`)
        },
    }
 ))

 export const useCombinedStore = create((...params) => ({
    ...createPokemonStore(...params),
   ...createCounterStore(...params)
}))
