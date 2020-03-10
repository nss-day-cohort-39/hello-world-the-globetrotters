    
import useLandmark from "./LandmarkDataProvider.js";
import Landmark from "./Landmark.js";


const LandmarkList = () => {
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useLandmark()

    landmarks.forEach(landmarkItem => {
        contentElement.innerHTML += Landmark(landmarkItem)
    });
}


export default LandmarkList