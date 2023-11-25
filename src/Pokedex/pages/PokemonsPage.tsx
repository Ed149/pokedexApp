import { useEffect, useState } from 'react'
import '../../App.css'
import { Header } from '../components/Header'
import { PokemonCard } from '../components/PokemonCard'
import { getPokemon } from '../helpers/pokemonList';
import { Link } from 'react-router-dom'
import { Pokemon } from '../../interfaces/pokemon.interface';

function PokemonsPage() {

  const [data, setData] = useState<Pokemon[]>([]);

  const getAllPokemons = async () => {
    let pokemonData: Pokemon[] = [];
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
              <Link to={`/pokemon/${element.id}`} key={element.id} style={{ textDecoration: 'none' }}>
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
