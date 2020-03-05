
import HOS from "./HOS.js";
import { useIcelandHOS, useJapanHOS, useMoroccoHOS, useSingaporeHOS, useSwitzerlandHOS } from "../../CountryDataProvider.js";
// import { useJapanHOS, useIcelandHOS, useMoroccoHOS, useSingaporeHOS, useSwitzerlandHOS } from "../../CountryDataProviderjs";

// 1.
export const JapanHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useJapanHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 2.
export const IcelandHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useIcelandHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 3.
export const MoroccoHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useMoroccoHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 4.
export const SingaporeHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useSingaporeHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}

// 5.
export const SwitzerlandHOSList = () => {
    const contentElement = document.querySelector(".countryDetail__listHOS")
    const hoss = useSwitzerlandHOS()

    hoss.forEach(hosItem => {
        contentElement.innerHTML += HOS(hosItem)
    });
}
