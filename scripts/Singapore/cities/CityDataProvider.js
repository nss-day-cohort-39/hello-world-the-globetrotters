const cityCollection = [
    {
        id: 1,
        name: "Singapore, Singapore"
    },

    {
        id: 2,
        name: "Hougang, Singapore"
    }, 

    {
        id: 3,
        name: "Tampines, Singapore"
    }
]


const useCities = () => {
    return cityCollection.slice()
}

export default useCities