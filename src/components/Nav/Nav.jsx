import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav(prop) {
  return (
    <div className={style.barraNav}>
      <Link to="/about">
        <button className={style.botonNav}>About</button>
      </Link>
      <Link to="/home">
        <button className={style.botonNav}>Home</button>
      </Link>
      {/* Este Botón te debería sacar los permisos y mandar al Login */}
      <Link to="/">
        <button className={style.botonNav} onClick={prop.logout}>
          Log out
        </button>
      </Link>
      <SearchBar onSearch={prop.onSearch} />
    </div>
  );
}
