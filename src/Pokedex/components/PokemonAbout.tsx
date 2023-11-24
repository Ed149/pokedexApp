import React from 'react'

export const PokemonAbout = ({height,weight,abilities,species,type}:any) => {
    return (
        <>
            <section className="pokemon__details_info__resume_stats">
                <div className="stat">
                    <h4>Height</h4>
                    <p>{height} {height >= 1 ? "m" : "cm"} </p>
                </div>
                <div className="stat">
                    <h4>Weight</h4>
                    <p>{weight} kg</p>
                </div>
                <div className="stat">
                    <h4>Abilities</h4>
                    <p>{abilities?.join(', ')}</p>
                </div>
            </section>

            <section className='pokemon__details_info__resume_breeding'>
                <h2>Breeding</h2>
                <div className="stat">
                    <h4>Gender</h4>
                    <ul className='stat__gender'>
                        {
                            species?.genderRate.map((el:any) => (
                                <li key={el.gender}>
                                    <img src={el.img} alt="" />
                                    <p>{el.rate} </p>
                                </li>
                            ))
                        }


                    </ul>
                </div>
                <div className="stat">
                    <h4>Egg Groups</h4>
                    <p>{species?.eggGroup.join(', ')}</p>
                </div>
                <div className="stat">
                    <h4>Egg Cycle</h4>
                    <p>{type}</p>
                </div>

            </section>

        </>

    )
}
