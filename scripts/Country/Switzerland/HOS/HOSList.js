
import HOS from "./HOS.js";
import { useIcelandHOS, useJapanHOS, useMoroccoHOS, useSingaporeHOS, useSwitzerlandHOS } from "../../CountryDataProvider.js";


//individual HOS list creator functions to send to each country's specific main.js file

// 1. Japan
export const JapanHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useJapanHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}
 
// 2. Iceland
export const IcelandHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useIcelandHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 3. Morocco
export const MoroccoHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useMoroccoHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 4. Singapore
export const SingaporeHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useSingaporeHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 5. Switzerland
export const SwitzerlandHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useSwitzerlandHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}
