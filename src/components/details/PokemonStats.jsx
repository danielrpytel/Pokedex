import { getStatPercHeight } from '../../utils/statPercHeight';

function PokemonStats({
    stats,
    type
}) {

    return (
        <div className="flex flex-col p-3 md:p-6 w-full rounded-lg shadow-lg bg-slate-800">
            <div className="mb-3">
                <h2 className="text-slate-300 text-xl">
                    Stats
                </h2> 
            </div>
            <div className="flex flex-row justify-between">
                {stats.map((stat) => (
                    <div key={stat.stat.name} className="w-12 md:w-24">
                        <div className="relative h-52 rounded-lg bg-slate-500"> 
                            <div className={`absolute bottom-0 w-full rounded-md ${type.type.name}`} style={{height: getStatPercHeight(stat)}}>
                                <div className="absolute inset-x-0 bottom-0 text-center mb-5">
                                    <h2 className="text-xs md:text-xl">{stat.base_stat}</h2>
                                </div>  
                            </div>
                            
                        </div>
                        <div className="text-center w-full mt-3">
                            <h3 className="inline-block text-slate-300">
                                {stat.stat.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>  
        </div>
        
    )
}

export default PokemonStats;