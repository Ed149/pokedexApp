import { useEffect, useState } from 'react'
import '../../App.css'
import { Header } from '../components/Header'
import { PokemonCard } from '../components/PokemonCard'
import { getPokemon } from '../helpers/pokemonList';
import { Link } from 'react-router-dom'

function PokemonsPage() {

  const [data, setData] = useState([]);

  const getAllPokemons = async () => {
    let pokemonData: [] = [];
    for (let i = 1; i <= 20; i++) {
      let pokemons = await getPokemon(i);
      pokemonData.push(pokemons);
    }
    setData(pokemonData);
  }

  useEffect(() => {
    getAllPokemons();
  }, [])



  return (
    <>
      <Header page={"pokelist"}/>
      <div className='wrapper'>
        <h2 className='pokedex__h2'>Pokedex</h2>
        <div className='pokemon__cards'>
          {
            data.map((element) => (
              <Link to={`/pokemon/${element.id}`} style={{ textDecoration: 'none' }}>
                <PokemonCard
                  key={element.id}
                  pokemon={element}
                  page={"pokelist"}
                />
              </Link>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default PokemonsPage;
