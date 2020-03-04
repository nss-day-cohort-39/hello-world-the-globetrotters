import useCities from './CityDataProvider.js'
import City from './City.js'


const CityList = () => {

    const contentElement = document.querySelector(".countryDetail__listCities")
    let cityHTMLRepresentation = ""
    const cities = useCities()

    for (const city of cities) {
        cityHTMLRepresentation += City(city) 
    }
 contentElement.innerHTML += cityHTMLRepresentation
}

export default CityList