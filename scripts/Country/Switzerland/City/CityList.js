import City from "./City.js";
import { useCity } from "../../CountryDataProvider.js";


const CityList = () => {
    const contentElement = document.querySelector(".countryDetail__listCities")
    const cities = useCity()

    cities.forEach(cityItem => {
        contentElement.innerHTML += City(cityItem)
    });
}


export default CityList
