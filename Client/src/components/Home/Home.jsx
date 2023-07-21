// import React from "react";
// import axios from "axios";
// import Title from "../Title/Title";
// import Cards from "../Cards/Cards";
// import { useState } from "react";

// export default function Home() {
//   const [characters, setCharacters] = useState([]);

//   const onSearch = (id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(
//       ({ data }) => {
//         if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//           window.alert("¡No hay personajes con este ID!");
//         }
//       }
//     );
//   };

//   function onClose(id) {
//     const charactersFiltered = characters.filter(
//       (character) => character.id !== Number(id)
//     );
//     setCharacters(charactersFiltered);
//   }
//   return (
//     <div>
//       <Title />
//       <Cards characters={characters} onClose={onClose} />
//     </div>
//   );
// }
