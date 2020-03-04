import useLeaders from './LeaderDataProvider.js'
import Leader from './Leader.js'



const LeaderList = () => {

const contentElement = document.querySelector(".countryDetail__listHOS")
const leaders = useLeaders()
let leaderHTMLRepresentation = ""

for (const leader of leaders) {
    leaderHTMLRepresentation += Leader(leader)
}
contentElement.innerHTML += leaderHTMLRepresentation
}

export default LeaderList