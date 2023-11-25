import { ProgressBar } from "./ProgressBar"

export const PokemonStats = ({ stats }: any) => {
    console.log("stats", stats)
    
    const baseStat = (stat: any) => {
        let totalPer = 150;
        let eqPercent = (stat * 100) / totalPer;
        return eqPercent.toFixed(2);
    }

    return (
        <section className='pokemon__details_info__resume_stats'>
            {
                stats.map((el: any) => 
                    (   
                        <div className="stat" key={el.name}>
                            <h4>{el.name}</h4>
                            <div className="stat__base">
                                <p>{el.base_stat}</p>
                                <ProgressBar
                                    percent={baseStat(el.base_stat)}
                                />
                            </div>
                        </div>
                    )
                )
            }
        </section>
    )
}
