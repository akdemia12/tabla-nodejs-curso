
const { crearArchivoTabla } = require("./helpers/multiplicar.js");
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

/* console.log(argv);
console.log("base: yargs", argv.b); */

crearArchivoTabla(argv.b, argv.listar, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
