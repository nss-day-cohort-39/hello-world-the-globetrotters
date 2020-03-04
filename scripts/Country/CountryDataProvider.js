const countryCollection = [
    {
    name: "Japan",
    HOS: ["Shinzo Abe", "Nahurito"],
    landmarks: ["Mount Fuji", "Shibuya Crossing"],
    image:
      "https://images.hdqwalls.com/download/mount-fuji-mountain-1366x768.jpg",
    "image alt": "Mount Fuji",
    cities: ["Tokyo", "Hiroshima"]
  }
];

export const useCountry = () => {
  return countryCollection.slice();
};


for (const country of countryCollection) {
    
}


export const useCity = () => {
    return countryCollection[0].cities.slice()
}

