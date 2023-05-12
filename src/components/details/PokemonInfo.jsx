import { getMToFtString } from '../../utils/mToFtConvert';
import { getKgToLbString } from '../../utils/kgToLbConvert';

function PokemonInfo({
    height,
    weight,
    habitat,
    abilities,
    gender_rate,
    capture_rate
}) {
console.log("Abilities");
console.log(abilities);

 
    return(
        <div className="mx-14 rounded-lg shadow-lg bg-slate-800">
            <div className="flex flex-col">
                <div className="flex flex-row m-3 text-slate-300 text-lg">
                    <div className="w-1/2">
                        <h3 className="">Height</h3>
                        <h4 className="">{getMToFtString(height)}</h4>
                    </div>

                    <div className="w-1/2">
                        <h3 className="">Weight</h3>
                        <h4>{getKgToLbString(weight)}</h4>
                    </div>
                </div>
                <div className="flex flex-row m-3 text-slate-300 text-lg">
                    <div className="w-1/2">
                        <h3 className="">Capture Rate</h3>
                        <h4 className="">{capture_rate}%</h4>
                    </div>

                    <div className="w-1/2">
                        <h3 className="">Habitat</h3>
                        <h4>{habitat}</h4>
                    </div>
                </div>
                <div className="flex m-3 text-slate-300 text-lg">
                    <div className="w-full">
                        <h3 className="">Abilities</h3>
                        <h4 className="">{abilities != null ? abilities : "-"}</h4>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo;