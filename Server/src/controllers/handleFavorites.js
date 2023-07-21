var myFavorites = [];

function postFav(req, res) {
  const character = req.body;

  myFavorites.push(character);
  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;

  myFavorites = myFavorites.filter((pjFav) => pjFav.id !== Number(id));

  return res.json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
