const fs = require("fs");
var colors = require('colors');

const crearArchivoTabla = async (base= 5, listar = false, h = 10)=> {
  let salida = "";


  for (i = 1; i <= h; i++) {
    salida += `${base} ${'x'} ${i} = ${i * base}\n`;
  }
  if (listar) {
    console.log("=====================".green);
    console.log(`=====TABLA DEL ${base}=====`.green);
    console.log("=====================".green);

    console.log(salida.rainbow);
  }

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida,)

    return `tabla-${base}.txt`;
};

module.exports = {
  crearArchivoTabla,
};
