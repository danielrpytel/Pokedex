import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";

function PokemonCard({
    id, 
    name, 
    image, 
    height, 
}) {

    const [pokemonColor, setPokemonColor] = useState();
    let getPokemonSizeImg = (height) => {
        let size = "";
        
        if (height >= 16) {
            size = "100%";
            return size;
        } else if (height >= 11) {
            size = "85%";
            return size;
        } else {
            size = "65%";
            return size;
        }
    }

    const pokemonImgSize = getPokemonSizeImg(height);

    useEffect(() => {
        const getPokemonColor = async () => {
            const color = await getColorFromUrl(image)
            if (color) setPokemonColor(color);
        };
        getPokemonColor();
    }, []);

    return(
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
    )
}

export default PokemonCard;