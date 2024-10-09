import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const characters = [
    { 
        id: 1, 
        name: "Thor", 
        description: "God from Norse Mythology",
        comics: ["Thor (1996)", "The Mighty Thor (2011)", "Thor: God of Thunder (2012)"],
    },
    { 
        id: 2, 
        name: "Iron Man", 
        description: "Genius, Billionaire, Playboy, Philanthropist",
        comics: ["Iron Man (1968)", "The Invincible Iron Man (2008)", "Iron Man: Extremis (2005)"],
    },
    { 
        id: 3, 
        name: "Captain America", 
        description: "The First Avenger",
        comics: ["Captain America (1968)", "Captain America: Reborn (2009)", "Captain America: Winter Soldier (2005)"],
    },
];

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        console.log(`Fetching character with id: ${id}`);
        const foundCharacter = characters.find((char) => char.id === parseInt(id));
        if (foundCharacter) {
            console.log(`Character found: ${foundCharacter.name}`);
            setCharacter(foundCharacter);
        } else {
            console.log("Character not found");
        }
    }, [id]);

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <h2>Comics</h2>
            <ul>
                {character.comics.map((comic, index) => (
                    <li key={index}>{comic}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;