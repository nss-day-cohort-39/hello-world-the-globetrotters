
import Landmark from "./Landmark.js";
import { useJapanLandmarks, useIcelandLandmarks, useMoroccoLandmarks, useSingaporeLandmarks, useSwitzerlandLandmarks } from "../../CountryDataProvider.js";


//individual HOS list creator functions to send to each country's specific main.js file

// 1.
export const JapanLandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useJapanLandmarks()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}

// 2.
export const IcelandLandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useIcelandLandmarks()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}

// 3.
export const MoroccoLandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useMoroccoLandmarks()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}

// 4.
export const SingaporeLandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useSingaporeLandmarks()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}

// 5.
export const SwitzerlandLandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useSwitzerlandLandmarks()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}
