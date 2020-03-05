import City from "./City.js";
import { useJapanCity, useIcelandCity, useMoroccoCity, useSingaporeCity, useSwitzerlandCity } from "../../CountryDataProvider.js";

//individual city list creator functions to send to each country's specific main.js file

// 1. Japan
export const JapanCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useJapanCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 2. Iceland
export const IcelandCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useIcelandCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 3. Morocco
export const MoroccoCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useMoroccoCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 4. Singapore
export const SingaporeCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useSingaporeCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 5. Switzerland
export const SwitzerlandCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useSwitzerlandCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

