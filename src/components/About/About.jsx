import React from "react";
import style from "./About.module.css";
import Title from "../Title/Title";

export default function About() {
  return (
    <div>
      <div>
        <div>
          <Title></Title>
        </div>
        <div>
          <h2 className={style.h2}>
            Soy el creador de esta página, es mi primer proyecto en React,
            <br />
            espero les guste!
            <br /> Vivo en Córdoba, Argentina. Tengo 21 años y estoy comenzando
            en este hermoso mundo de la programación.
            <br />
            Aquí dejo a su disposición mi Linkedin por si te interesa compartir
            algún Feedback!
          </h2>
        </div>
      </div>
    </div>
  );
}
