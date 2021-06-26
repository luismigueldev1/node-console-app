const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Representa la base de la multiplicación",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Lista la tabla de multiplicar",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "Representa el numero hasta donde se mulplicara la base",
    default: 10,
  })
  .check((argv) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que se un numero";
    }
    if (isNaN(argv.hasta)) {
      throw "El limite tiene que se un numero";
    }
    return true;
  }).argv;

module.exports = argv;
