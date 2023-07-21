export default function validar(userData) {
  const errors = {};
  //Username
  if (!userData.username) {
    errors.username = "Completa este campo.";
  } else if (!/^[\w-/.]+@([\w-]+\.)+[\w-]{3}$/.test(userData.username)) {
    errors.username = "Email inválido";
  } else if (userData.username.length > 35) {
    errors.username = "Email mayor a 35 caracteres.";
  } else {
    errors.username = "";
  }

  //Password
  if (!userData.password) {
    errors.password = "Completa la Password";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password entre 6 y 10 caracteres";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "la password debe incluir un número";
  } else {
    errors.password = "";
  }

  return errors;
}
