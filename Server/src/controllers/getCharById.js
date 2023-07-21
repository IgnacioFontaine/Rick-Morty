const axios = require("axios");

const URL_API = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    //Obtener Id
    const { id } = req.params;
    //Hacer promesa
    const { data } = await axios(`${URL_API}/${id}`);

    //Valida que haya personaje
    if (!data.nombre) throw Error(`Faltan datos del personaje ID: ${id}.`);

    const chacater = {
      id: Number(data.id),
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    //De encontrar personaje, retornarlo
    return res.status(200).json(chacater);
  } catch (error) {
    //De no encontrarlo, mensaje error
    return error.message.incluides("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }
};

module.exports = { getCharById };
