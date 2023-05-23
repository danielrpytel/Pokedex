import { useState, useEffect} from 'react';

import { getColorFromUrl } from "../../utils/colors";
import { getImgSize } from "../../utils/imgSize";

function PokemonImg ({
    name,
    height,
    image
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

    return (
        <div className="flex w-96 h-96 mx-auto md:mx-0 md:ml-auto rounded-lg shadow-lg" style={{backgroundColor : pokemonColor}}>
            <img className="m-auto" style={{width : pokemonImgSize, height : pokemonImgSize}} src={image} alt={name}/>
        </div>
    )
}

export default PokemonImg;