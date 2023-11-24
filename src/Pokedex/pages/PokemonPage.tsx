import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemonInfo } from '../helpers/pokemonList';
import { Header } from '../components/Header';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonCardInfo } from '../components/PokemonCardInfo';
import { Link } from 'react-router-dom'
import { PokemonAbout } from '../components/PokemonAbout';
import { PokemonStats } from '../components/PokemonStats';


export const PokemonPage = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState();
    const [active,setActive] = useState('about')


    const getPokemonInfoData = async (id: number | string) => {
        console.log("Id recibido", id)
        let pkmn = await getPokemonInfo(id);
        console.log("pkmnen getok", pkmn)
        setPokemon(pkmn)
    }

    const handleActive = (e:any) =>{
        e.preventDefault();
        setActive(e.target.id);
    }

    // const pokemon = useMemo(async() => await getPokemonData(pokemonId), [pokemonId])

    useEffect(() => {
        console.log("useeffect")
        getPokemonInfoData(pokemonId)
    }, [pokemonId])


    return (
        <div className={`pokemon__details ${pokemon?.type[0]}`}>
            <Header page={"pokemon"} />
            <div className="wrapper">
                <PokemonCardInfo
                    id={pokemonId}
                    name={pokemon?.name}
                    type={pokemon?.type}
                    page={"pokemon"}
                />

            </div>
            <div className="pokemon__details_info">
                <div className='pokemon__details_info_img'>
                    <img src={pokemon?.sprites.normal} alt={pokemon?.name} />
                </div>
                <div className="pokemon__details_info__resume">
                    <nav className="pokemon__details_info__resume_nav">
                        <Link to="/" className={active == 'about' ? "active" : ""} id="about" onClick={handleActive}>About</Link>
                        <Link to="/" className={active == 'stats' ? "active" : ""} id="stats" onClick={handleActive}>Base Stats</Link>
                        <Link to="/" className={active == 'evolution' ? "active" : ""} id="evolution" onClick={handleActive}>Evolution</Link>
                        <Link to="/" className={active == 'moves' ? "active" : ""} id="moves" onClick={handleActive}>Moves</Link>
                    </nav>
                    { 
                        active == "stats" ? (
                            <PokemonStats 
                            stats={pokemon?.stats}
                            />
                        ) : (
                            <PokemonAbout 
                                height={pokemon?.height}
                                weight={pokemon?.weight}
                                abilities={pokemon?.abilities}
                                species={pokemon?.species}
                                type={pokemon?.type[0]}
                            />
                        )
                    
                    }


                </div>

            </div>

        </div>
    )
}
