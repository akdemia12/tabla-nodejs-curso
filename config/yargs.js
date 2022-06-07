const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'
  })
  .option('l', {
   alias: 'listar',
   type: 'boolean',
   demandOption: true,
   default: false
   })
   .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'hasta donde quieres la tabla'
    })
   
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;

  module.exports = argv;