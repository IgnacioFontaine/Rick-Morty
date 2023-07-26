import "./App.css";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    let repeat = true;
    characters.forEach((personaje) => {
      if (personaje.id === parseInt(id)) {
        repeat = false;
      }
    });

    if (repeat) {
      try {
        const response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        const data = response.data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } catch (error) {
        alert("No existe personaje con ese ID.");
      }
    } else {
      alert("Personaje repetido!");
    }
  };

  //Quitar cards
  function onClose(id) {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  }

  //Fake Login info
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  //Login
  const login = (userData, req, res) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      });
    } catch (AxiosError) {
      //No envia error al loguearte mal
      res.status(500).send(window.alert("Credenciales incorrectas!"));
    }
  };

  //Logout
  function logout() {
    setAccess(false);
    navigate("/");
  }

  // App.js
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  //Rutas para navegar
  return (
    <div className="App">
      {/* Nav se muestra siempre que no sea el Login*/}
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        {/* Este es mi Form Login */}
        <Route path="/" element={<Form login={login} />} />

        {/* Este va a ser mi Home */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        {/* Este va a ser mi About */}
        <Route path="/about" element={<About />} />

        {/* Este va a ser mi Favoritos */}
        <Route path="/favorites" element={<Favorites />} onClose={onClose} />

        {/* Este va a ser mi Detail */}
        <Route path="/detail/:id" element={<Detail />} />

        {/*Este la pagina error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
