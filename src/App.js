import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon.js/'

const Pokedex = require('pokeapi-js-wrapper')
const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000 
}
const P = new Pokedex.Pokedex(options)

function App() {
  // Init state for Pokemon
  const [ pokemon, setPokemon ] = useState('')

  // Fetch Pokemon data
  useEffect(() => {
    const fetchPokemon = async () => {
      const butterfree = await P.getPokemonByName('butterfree')
      setPokemon(butterfree)
      console.log(butterfree)
    }
    fetchPokemon()
  }, [])

  return (
    pokemon && 
    <div className="App">
      <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
