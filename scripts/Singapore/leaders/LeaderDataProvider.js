const leaderCollection = [
    {
        id: 1,
        name: "Halima Yacob, President"
    },
    
    {
        id: 2,
        name: "Lee Hsien Loong, Prime Minister"
    },
    {
        id: 3,
        name: "Heng Swee Keat, Deputy Prime Minister"
    }
]


const useLeaders = () => {
    return leaderCollection.slice()
}


export default useLeaders