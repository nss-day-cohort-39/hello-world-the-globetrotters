
import { useCountry } from "./CountryDataProvider.js";
import Country from "./Country.js";



// const CityList = () => {
//     const contentElement = document.querySelector(".countryDetail__listCities")
//     const cities = useCity()

//     cities.forEach(cityItem => {
//         contentElement.innerHTML += City(cityItem)
//     });
// }

// export default CityList;

const CountryList = () => {
  const contentElement = document.querySelector(".country");
  const countries = useCountry();

  for (const countryItem of countries) {
    contentElement.innerHTML += Country(countryItem);
  }
};

export default CountryList