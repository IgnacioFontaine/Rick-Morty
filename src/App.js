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

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    let repeat = true;
    characters.forEach((personaje) => {
      if (personaje.id === parseInt(id)) {
        repeat = false;
      }
    });
    if (repeat) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      );
      // .catch(error=>alert("No hay personajes con este ID!")) verificar indentación
    } else alert("Este personaje está repetido.");
  };

  function onClose(id) {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  }

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "Prueba@gmail.com";
  const PASSWORD = "Prueba01";

  //Login
  function login(userData) {
    if (userData.username === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }

  //Logout
  function logout() {
    setAccess(false);
    navigate("/");
  }

  // App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {/* Nav se muestra siempre que no sea el Login*/}
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      {/* <Nav onSearch={onSearch} /> */}

      <Routes>
        {/* Este es mi Form Login */}
        <Route path="/" element={<Form login={login} />} />

        {/* Este va a ser mi Home */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        {/* Este va a ser mi About */}
        <Route path="/about" element={<About></About>} />

        {/* Este va a ser mi Detail */}
        <Route path="/detail/:id" element={<Detail />} />

        {/*Este la pagina error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
