const axios = require('axios');

const apiKey = "81e6edade17b1b48737d013e62184588";

const getClima = async(ciudad) => {
    try {
        ciudadURI = encodeURIComponent(ciudad);
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
        const respuesta = await axios.get(url);
        valores = respuesta.data.main;
        clima = respuesta.data.weather[0].main;
        clima2 = respuesta.data.weather[0].description;
        //valores = respuesta.data;
        vectorclima = [valores.temp, clima, clima2, valores.humidity, valores.feels_like, valores.temp_max, valores.temp_min]
        return vectorclima;
    } catch (error) {
        // return `La ciudad ${ciudad} ingresada no ha sido encontrada `;
        return false;
    }
}
module.exports = { getClima }