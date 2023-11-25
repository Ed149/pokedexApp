import { Route, Routes } from "react-router-dom"
import PokemonsPage from "../Pokedex/pages/PokemonsPage";
import { PokemonPage } from "../Pokedex/pages/PokemonPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/pokedexApp" element={<PokemonsPage />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonPage/>}/>
            </Routes>
        </>


    )
}