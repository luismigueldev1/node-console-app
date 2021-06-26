const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
  .then((response) =>
    console.log(colors.green(response) + " creada correctamente")
  )
  .catch((error) => console.log(error));
