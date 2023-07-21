import React from "react";
import style from "./Form.module.css";
import ImagenForm from "./mortycaminando.jpg";
import { useState } from "react";
import validaciones from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  const handleChange = (event) => {
    const property = event.target.name;
    const valor = event.target.value;
    setUserData({ ...userData, [property]: valor });
    setErrors(validaciones({ ...userData, [property]: valor }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.contenedor}>
        <div>
          <h1 className={style.h2}>-LOGIN-</h1>
          <div>
            <img className={style.contenedorImagen} src={ImagenForm} alt="" />
          </div>
        </div>
        <div className={style.formulario}>
          <div>
            {/* Email */}
            <label htmlFor="email">Username: </label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={style.input}
              autoComplete="off"
            ></input>

            {errors.email && <p>{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
              autoComplete="off"
              className={style.input}
            ></input>
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <button type="submit" className={style.botonSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
