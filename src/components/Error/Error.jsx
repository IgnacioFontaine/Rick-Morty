import React from "react";
import style from "./Error.module.css";
import ErrorImagen from "./ErorImagen.jpg";

export default function Error() {
  return (
    <div className={style.contenedor}>
      {/* Texto error */}
      <div>
        <h1 className={style.h1}>!ERROR 404¡</h1>
        <h2 className={style.h2}>Página no encontrada</h2>
      </div>
      {/* Imagen error */}
      <div>
        <img src={ErrorImagen} alt="Error Imagen" />
      </div>
    </div>
  );
}
