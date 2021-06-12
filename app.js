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
        if (res) {
            let clenesp = ""
            console.log(`===== DATOS CLIMATOLÓGICOS DE LA CIUDAD DE ${ciudadmay} =====`.bgWhite.black);
            if (res[1] == "Clouds") {
                clenesp = "Nublado"
                console.log(`El clima está: ${clenesp} con ${res[2]} `.bgGrey)
            } else if (res[1] == "Clear") {
                clenesp = "Despejado"
                console.log(`El clima está: ${clenesp} con ${res[2]} `.bgYellow.blue)
            } else if (res[1] == "Rain") {
                clenesp = "Lluvioso"
                console.log(`El clima está: ${clenesp} con ${res[2]} `.bgBlue)
            } else {
                console.log(`El clima está: ${clenesp} con ${res[2]} `)
            }
            console.log(`La Humedad Absoluta es de: ${res[3]}  g /m3. `.bgCyan.black)

            if (res[0] >= 23) {
                console.log(`La temperatura es de: ${res[0]} °C, con sensación de: ${res[4]} °C`.bgBrightRed)
                console.log(`La temperatura máxima se estima en: ${res[5]} °C`.bgBrightRed);
                console.log(`La temperatura mínima se estima en: ${res[6]} °C`.bgBrightRed);

            } else if (res[0] >= 15 && res[0] < 23) {
                console.log(`La temperatura es de: ${res[0]} °C, con sensación de: ${res[4]} °C`.bgBrightGreen.black)
                console.log(`La temperatura máxima se estima en: ${res[5]} °C`.bgBrightGreen.black);
                console.log(`La temperatura mínima se estima en: ${res[6]} °C`.bgBrightGreen.black);

            } else {
                console.log(`La temperatura es de: ${res[0]} °C, con sensación de: ${res[4]} °C`.bgBrightCyan.blue)
                console.log(`La temperatura máxima se estima en: ${res[5]} °C`.bgBrightCyan.blue);
                console.log(`La temperatura mínima se estima en: ${res[6]} °C`.bgBrightCyan.blue);

            }

        } else {
            console.log(`La ciudad ${ciudad} ingresada no existe, o no ha sido encontrada `.bgRed);
        }

    })
    .catch(err => console.log(err));