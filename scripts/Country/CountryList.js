
import { useJapan } from "./CountryDataProvider.js";
import Country from "./Country.js";


const CountryList = () => {
  const contentElement = document.querySelector(".country");
  // const countries = useCountry();
  const country = useJapan();
  // for (const countryitem of country) {
  //   contentElement.innerHTML += Country(countryitem);
  // }
  contentElement.innerHTML += Country(country)
};

export default CountryList