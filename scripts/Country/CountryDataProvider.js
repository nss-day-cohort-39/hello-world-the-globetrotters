const countryCollection = [
  {
    name: "Japan",
    HOS: ["Shinzo Abe", "Nahurito"],
    landmarks: ["Mount Fuji", "Shibuya Crossing"],
    image:
      "https://images.hdqwalls.com/download/mount-fuji-mountain-1366x768.jpg",
    "image alt": "Mount Fuji",
    cities: ["Tokyo", "Hiroshima"]
  },
  {
    name: "Japan",
    HOS: ["Shinzo Abe", "Nahurito"],
    landmarks: ["Mount Fuji", "Shibuya Crossing"],
    image:
      "https://images.hdqwalls.com/download/mount-fuji-mountain-1366x768.jpg",
    "image alt": "Mount Fuji",
    cities: ["Tokyo", "Hiroshima"]
  },
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

// export const useCountry = () => {
//   return countryCollection.slice();
// }

export const useJapan = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
    return country
    }
  }
};

export const useCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
    return country.cities
    }
  }
  // return countryCollection[0].cities.slice();
};
