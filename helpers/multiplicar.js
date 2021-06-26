const colors = require("colors");
const fs = require("fs");

const crearArchivo = (base = 1, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    try {
      let salida = "";
      for (let i = 1; i <= hasta; i++) {
        salida += `${base}  x  ${i} = ${base * i}\n`;
      }

      if (listar) {
        console.log("===============");
        console.log("Tabla del", base);
        console.log("===============");
        console.log(salida);
      }
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      resolve(`tabla-${base}.txt`);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { crearArchivo };
