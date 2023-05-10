import { useState } from 'react';

import RedPokeball from '../../images/red-pokebal.png';
import BluePokeball from '../../images/blue-pokebal.png';


function PokemonOverview({
    flavor_text_sword,
    flavor_text_shield,
    nameAlt
}) {

    const [version, setVersion] = useState("sword")

    return (
        <div className="flex flex-col w-full">
            <div className="mx-14 mb-5">
                <div className="mr-auto">
                    <h3 className="text-xl text-slate-300">
                        {version === "sword" ? flavor_text_sword : flavor_text_shield}
                    </h3>
                </div>
            </div>
                <div className="flex flex-row mx-14">
                    <div className="mr-5">
                        <button className="w-10 h-10"
                        onClick={() => setVersion("sword")}
                        >
                            <img src={BluePokeball} alt={nameAlt} />
                        </button>
                    </div>
                    <div>
                        <button className="w-10 h-10"
                        onClick={() => setVersion("shield")}>
                            <img src={RedPokeball} alt={nameAlt} />
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default PokemonOverview;