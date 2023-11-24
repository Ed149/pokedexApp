import React from 'react'

export const PokemonStats = ({ stats }:any) => {
    console.log("stats", stats)


    const baseStat = (stat) =>{
        let totalPer = 255;
        let eqPercent = (stat*100)/255;
        return eqPercent;
    }

    return (
        <section className='pokemon__details_info__resume_stats'>

            {
                stats.map((el:any) => (
                    <div className="stat">
                        <h4>sp.Atk</h4>
                        <div className="stat__base">
                            <p>{el.base_stat}</p>
                           <progress value={el.base_stat} max="255" className='medium'/>
                        </div>
                    </div>
                ))
            }


        </section>
    )
}
