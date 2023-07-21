import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div className={style.contenedor}>
        {/* El primer div va la info */}
        <div className={style.description}>
          <h1>{character.name}</h1>
          <h2>Gender | {character.gender}</h2>
          <h2>Space | {character.species}</h2>
          <h2>Origen |{character.origin?.name} </h2>
        </div>
        {/* El segundo div va la imagen */}
        <div className={style.imagen}>
          <img src={character.image} alt="Imagen" />
        </div>
      </div>
    </>
  );
}
