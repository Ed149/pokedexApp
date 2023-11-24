import React from 'react'
import { PokemonType } from './PokemonType'

export const PokemonCardInfo = ({ id, name, type, page = "pokemonList" }: any) => {
    console.log("pokemonCardingo", type)
    return (
        <div className={`${page == "pokemon" ? "card__info_pokemon" : ""} card__info`}>
            <div className='card__info_id'>
                <p><span>#{id}</span></p>

            </div>
            <div className='card__info_description'>
                <h3>{name}</h3>
                <ul className='types'>
                    {
                        type?.map((element: any, indx: any) => (
                            <PokemonType
                                key={indx}
                                type={element}
                            />
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}
