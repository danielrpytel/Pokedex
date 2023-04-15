import Balbasaur from "../images/balbasaur.png";
import Squirtle from "../images/squirtle.png";

function Header() {

    return(
        <header>
            <div className="flex w-full h-24 drop-shadow-lg bg-red-500">
                <div className="flex mx-auto">
                    <div className="w-20 h-20 my-2">
                        <img className="w-18 h-18 object-cover" src={Balbasaur} alt="Balbasaur png" />
                    </div>
                    <div className="my-auto mx-8">
                        <h1 className="font-sans text-2xl text-white">
                            Pokédex
                        </h1>
                    </div>
                    <div className="w-20 h-20 my-2">
                        <img className="w-18 h-18 object-cover" src={Squirtle} alt="Squirtle png" />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;