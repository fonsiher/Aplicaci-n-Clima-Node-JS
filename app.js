const colors = require("colors");
const { getClima } = require("./controlador/clima")
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }

}).argv;
let ciudad = argv.ciudad;
let ciudadmay = ciudad.toUpperCase()
getClima(ciudad)
.then(res => {
    if(res){
        console.log(`===== DATOS CLIMATOLÓGICOS DE LA CIUDAD DE ${ciudadmay} =====`);
        console.log(`El clima está: ${res[1]} con ${res[2]} `)
        console.log(`La temperatura es de: ${res[0]} °C, con sensación de: ${res[4]} °C`)
        console.log(`La Humedad Absoluta es de: ${res[3]}  g /m3. `)
        console.log(`La temperatura máxima se estima en: ${res[5]} °C`);
        console.log(`La temperatura mínima se estima en: ${res[6]} °C`);    
    }else{
        console.log(`La ciudad ${ciudad} ingresada no ha sido encontrada `);
    }
     
})  
.catch(err => console.log(err));