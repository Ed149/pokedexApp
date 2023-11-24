import React from 'react'
import { PokemonType } from './PokemonType'
import { PokemonCardInfo } from './PokemonCardInfo'

export const PokemonCard = ({ pokemon}:any) => {
    let typeClass = pokemon.type.includes('grass') ? 'grass' :
        pokemon.type.includes('fire') ? 'fire' :
            pokemon.type.includes('water') ? 'water' :
                pokemon.type.includes('bug') ? 'bug' :
                    pokemon.type.includes('poison') ? 'poison' :
                        pokemon.type.includes('normal') ? 'normal' :
                            'flying'




    console.log("pokemon card", pokemon)
    return (
        <div className={`card ${typeClass}`}>
            
            <PokemonCardInfo 
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name} 
                type={pokemon.type}
            />

            <div className="card__image">
                <img src={pokemon.sprites.normal} alt={pokemon.name} className='card__img card__img_bg' />
            </div>
            {/* <img src="/src/assets/pokeb.png" alt="" /> */}
        </div>
    )
}
