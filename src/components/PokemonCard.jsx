
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
    
    return(
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-600">
            <img className="w-full" src={image} alt={name}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <p>{name}</p>
                </div>
                <p>
                   {id} 
                </p>
            </div>
        </div>
    )
}

export default PokemonCard;