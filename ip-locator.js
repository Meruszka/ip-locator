const axios = require('axios');
const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY ;

const logging = (data) => {
    console.log(
        `
        IP: ${data.ip_address}
        Country: ${data.country}
        City: ${data.city}
        Continent: ${data.continent}
        Region: ${data.region}
        Logitude: ${data.longitude}
        Latitude: ${data.latitude}`
    );
}

const ipLocator = (ip) => {
    const url = `https://api.ipfind.com?ip=${ip}&auth=${api_key}`;
    axios.get(url).then(response => {
        logging(response.data);
    }).catch(error => {
        console.log(error);
    }
    );
}

ipLocator('8.8.8.8');