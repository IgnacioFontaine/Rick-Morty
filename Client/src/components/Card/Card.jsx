import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  //Estado favoritos
  const [isFav, setIsFav] = useState(false);

  //Función para ser o no favorito
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  const pagFavoritos = useLocation();

  //Mapeo favoritos
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

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
      {/* Este botón no debería renderizarse en los favoritos */}
      {pagFavoritos.pathname === "/favorites" ? null : (
        <button className={style.button} onClick={() => onClose(id)}>
          X
        </button>
      )}

      {/* Renderiza el corazón dependiendo el estado de isFav */}
      {isFav ? (
        <button className={style.botonFav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.botonFav} onClick={handleFavorite}>
          🤍
        </button>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
