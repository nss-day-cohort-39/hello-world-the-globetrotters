import City from "./City.js";
import { useJapanCity, useIcelandCity, useMoroccoCity, useSingaporeCity, useSwitzerlandCity } from "../../CountryDataProvider.js";

//individual city list creator functions to send to each country's specific main.js file

// 1.
export const JapanCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useJapanCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 2.
export const IcelandCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useIcelandCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 3.
export const MoroccoCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useMoroccoCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 4.
export const SingaporeCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useSingaporeCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

// 5.
export const SwitzerlandCityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useSwitzerlandCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}

