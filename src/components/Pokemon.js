// Component for single Pokemon

// Imports
import React from 'react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardImg,
	CardBody,
	CardFooter,
	Button
  } from "shards-react";

const Pokemon = (pokemon) => {
	const currentPokemon = pokemon.pokemon
	return (
	<div classname="pokemon">
		<Card>
			<CardHeader><p>{currentPokemon.name}</p></CardHeader>
			<CardBody>
				<CardImg src={currentPokemon.sprites.front_default}/>
				<CardTitle>
					<p>
					{currentPokemon.types[0].type.name}<span> | </span>
					{currentPokemon.types.length > 1 && currentPokemon.types[1].type.name}</p>
				</CardTitle>
				<p>someshit</p>
			</CardBody>
		</Card>
	</div>
	)
}

export default Pokemon