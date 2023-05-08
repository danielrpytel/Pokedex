import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";
import { getImgSize } from "../utils/imgSize";

import {Link} from "react-router-dom";

function PokemonCard({
    id, 
    name, 
    image, 
    height,
    nameUrl 
}) {
    const [pokemonColor, setPokemonColor] = useState();
    const [pokemonImgSize, setImgSize] = useState();

    useEffect(() => {
        const getPokemonColor = async () => {
            const color = await getColorFromUrl(image)
            if (color) setPokemonColor(color);
        };

        const getPokemonImgSize = () => {
            const imgSize = getImgSize(height);
            setImgSize(imgSize);
        }
        
        getPokemonImgSize();
        getPokemonColor();
    }, []);

    return(
        <Link to={`/details/${nameUrl}`}>
            <div className="rounded overflow-hidden shadow-lg bg-slate-300 max-w-xs">
                <div className="flex flex-col">
                    <div className="flex w-full h-80" style={{backgroundColor : pokemonColor}}>
                        <img className="m-auto" style={{width : pokemonImgSize, height : pokemonImgSize}} src={image} alt={name}/>
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
        </Link>
        
    )
}

export default PokemonCard;