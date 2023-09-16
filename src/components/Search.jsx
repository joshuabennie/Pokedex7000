import React, { useState, useEffect } from 'react';
import './Search.css';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Search() {
    const [pokemonName, setPokemonName] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);

    useEffect(() => {
        // Fetch the first 151 Pokemon
        Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(response => {
            setAllPokemon(response.data.results);
            setDisplayedPokemon(response.data.results);
        });
    }, []);

    const searchPokemon = () => {
        if (pokemonName) {
            const filtered = allPokemon.filter(pokemon => 
                pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()) // Partial match
            );
            setDisplayedPokemon(filtered);
        } else {
            setDisplayedPokemon(allPokemon);
        }
    };

    const restoreAllPokemon = () => {
        setDisplayedPokemon(allPokemon);
        setPokemonName("");
    };

    return (
        <>
            {/* Search Input */}
            <div className='searchDiv'>
                <input 
                    className='search' 
                    type="text" 
                    value={pokemonName} 
                    onChange={(event) => {
                        setPokemonName(event.target.value);
                        searchPokemon(); // Filter Pokémon cards as you type
                    }}
                    placeholder="Pikachu"
                />
                <br />
                <button className='searchPoke' onClick={searchPokemon}>
                    Search Pokemon
                </button>
                {pokemonName && <button className='searchPoke' onClick={restoreAllPokemon} style={{marginLeft: '10px'}}>
                    Refresh
                </button>}
            </div>

            {/* Display Pokemon or Message */}
            <div className='displaySection'>
                {displayedPokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name} 
                        name={pokemon.name} 
                        isSingle={displayedPokemon.length === 1}
                    />
                ))}
            </div>
        </>
    );
}

function PokemonCard({ name, isSingle }) {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
            setPokemonDetails({
                name: response.data.name,
                img: response.data.sprites.front_default,
            });
        });
    }, [name]);

    if (!pokemonDetails) return null;

    return (
        <Card style={{ width: isSingle ? '30rem' : '18rem', margin: isSingle ? '2rem auto' : '2rem' }}>
            <Card.Img variant="top" src={pokemonDetails.img} alt="Pokemon Image" />
            <Card.Body>
                <Card.Title>{pokemonDetails.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Choose Your Pokemon!</Button>
            </Card.Body>
        </Card>
    );
}
