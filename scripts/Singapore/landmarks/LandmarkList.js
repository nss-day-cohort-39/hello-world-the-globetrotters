import useLandmarks from './LandmarkDataProvider.js'
import Landmark from './Landmark.js'


const LandmarkList = () => {
    
    const contentElement = document.querySelector(".countryDetail__listLandmarks")
    const landmarks = useLandmarks()
    let landmarkHTMLRepresentation = ""

    for (const landmark of landmarks) {
        landmarkHTMLRepresentation += Landmark(landmark)
    }
    contentElement.innerHTML += landmarkHTMLRepresentation
}


export default LandmarkList