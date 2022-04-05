import React from "react";
import Spinner from "../components/Spinner";
import CharacterItem from "./CharacterItem";


const CharacterGrid = ({ items, isloading }) => {
  return isloading ? (<h1><Spinner/></h1>) :( <section className="cards">
    {items.map ( item => (
        <CharacterItem key={item.char_id} itemss={item}></CharacterItem>
    ))}
    </section>)
  
};
export default CharacterGrid;
