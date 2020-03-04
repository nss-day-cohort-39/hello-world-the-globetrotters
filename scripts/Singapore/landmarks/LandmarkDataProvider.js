const landmarkCollection = [
    {
        id: 1,
        name: "Merlion Park"
    },

    {
        id: 2,
        name: "Singapore Flyer"
    },

    {
        id: 3,
        name: "Old Parliament House"
    }
]


const useLandmarks = () => {
    return landmarkCollection.slice()
}

export default useLandmarks