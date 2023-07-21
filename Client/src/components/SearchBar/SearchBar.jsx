import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  var idRandom = Math.floor(Math.random() * 825) + 1;

  // function verificar(characters, id) {
  //   for (let i = 0; i < characters.length; i++) {
  //     if (characters.id === id) {
  //       window.alert("Ya se encuentra en pantalla!");
  //     }
  //   }
  // }

  return (
    <div>
      <input
        placeholder="Agregar por ID. . ."
        onChange={handleChange}
        value={id}
        className={style.barraBusqueda}
        type="search"
      />
      <button
        className={style.botonBusqueda}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
      <button
        className={style.botonBusqueda}
        onClick={() => onSearch(idRandom)}
      >
        Random
      </button>
    </div>
  );
}
