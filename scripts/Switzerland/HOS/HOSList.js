
import HOS from "./HOS.js";
import useHOS from "./HOSDataProvider.js";


const HOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const HOSs = useHOS()

    HOSs.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}


export default HOSList