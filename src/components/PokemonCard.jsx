import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";

function PokemonCard({
    id, 
    name, 
    image, 
    type, 
    weight, 
    height, 
    stats, 
    statsName
}) {

    const [pokemonColor, setPokemonColor] = useState();

    useEffect(() => {
        const getPokemonColor = async () => {
            const color = await getColorFromUrl(image)
        if (color) setPokemonColor(color);
    };
        getPokemonColor();
    }, []);

    return(
        <div className="rounded overflow-hidden shadow-lg bg-slate-300">
            <div className="flex flex-col">
                <div className="w-full" style={{backgroundColor : pokemonColor}}>
                    <img className="mx-auto w-full" src={image} alt={name}/>
                </div>
                <div className="px-4 pt-2">
                    <p className="text-lg">
                    #{id} 
                    </p>
                </div>
                <div className="px-4 py-2">
                    <p className="font-bold text-2xl">{name}</p> 
                </div>              
            </div>
        </div>
    )
}

export default PokemonCard;