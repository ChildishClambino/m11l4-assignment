import React from 'react';
import { Link } from 'react-router-dom';

const characters = [
    { id: 1, name: "Thor", thumbnail: "thor.jfif" },
    { id: 2, name: "Iron Man", thumbnail: "iron_man.jfif" },
    { id: 3, name: "Captain America", thumbnail: "captain_america.jfif" }
];

const BrowseCharacters = () => {
    return (
        <div>
            {characters.map((character) => (
                <div key={character.id} className="character-card">
                    <Link to={`/character-details/${character.id}`}>
                        <h3>{character.name}</h3>
                        <img src={character.thumbnail} alt={character.name} />
                    </Link> 
                </div>
            ))}
        </div>
    );
};

export default BrowseCharacters;