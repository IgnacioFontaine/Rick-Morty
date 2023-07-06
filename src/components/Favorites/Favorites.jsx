import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.contenedor}>
      {favorites.map(({ id, name, species, gender, image, onClose }) => {
        return (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
