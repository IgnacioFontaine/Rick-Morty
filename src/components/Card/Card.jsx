import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={style.carta}>
      <img className={style.imagen} src={image} alt="Imagen" />

      <div>
        <Link to={`/detail/${id}`}>
          <h1 className={style.nombre}>{name}</h1>
        </Link>

        <h1>
          {species} || {gender}
        </h1>
      </div>
      <button className={style.button} onClick={() => onClose(id)}>
        X
      </button>
    </div>
  );
}
