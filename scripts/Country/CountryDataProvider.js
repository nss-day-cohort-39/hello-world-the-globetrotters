const countryCollection = [
  {
    name: "Japan",
    HOS: ["Emperor Naruhito", "Prime Minister Shinzo Abe"],
    landmarks: ["Mount Fuji", "Shibuya Crossing","Hiroshima Peace Park"],
    image:
      "https://images.hdqwalls.com/download/mount-fuji-mountain-1366x768.jpg",
    "image alt": "Mount Fuji",
    cities: ["Tokyo", "Yokohama","Osaka"]
  },
  {
    name: "Iceland",
    HOS: ["Guðni Jóhannesson - President", "Katrín Jakobsdóttir - Prime Minister"],
    landmarks: ["Hallgrímskirkja - Lutheran church and among the tallest structure in the country.", "Blue Lagoon - geothermal hotpsring outside the main city.","Jokulsarlon - glacial lagoon where glaciers meet the Atlantic ocean."],
    image:
      "https://i.imgur.com/f5CUfIM.jpg",
    "image alt": "One of Iceland's most popular waterfalls.",
    cities: ["Reykjavík", "Kópavogur","Hafnarfjörður"]
  },
  {
    name: "Morocco",
    HOS: ["Mohammed VI", "Saadeddine Othmani","Hakim Benchamach"],
    landmarks: ["Jardin Majorelle", "The Hassan II Mosque","Chellah"],
    image:
      "https://media.nomadicmatt.com/moroccoguide.jpg",
    "image alt": "Morocco",
    cities: ["Marrakesh", "Casablanca","Rabat"]
  },
  {
    name: "Singapore",
    HOS: ["Halima Yacob, President", "Lee Hsien Loong, Prime Minister","Heng Swee Keat, Deputy Prime Minister"],
    landmarks: ["Merlion Park", "Singapore Flyer","Old Parliament House"],
    image:
      "https://www.planetware.com/photos-large/SIN/singapore-gardens-by-the-bay.jpg",
    "image alt": "Singapore-image",
    cities: ["Singapore, Singapore", "Hougang, Singapore","Tampines, Singapore"]
  },
  {
    name: "Switzerland",
    HOS: ["Simonetta Sommaruga", "Ignazio Cassis","Alain Berset"],
    landmarks: ["Matterhorn", "Chateau de Chillon","Mount Pilatus"],
    image:
      "https://s3.amazonaws.com/bucketeer-4de657b8-6d51-4a8d-9fee-1b876d2bfe98/magazine/wp-content/uploads/2019/07/10083602/iStock-499263804.jpg",
    "image alt": "Switzerland",
    cities: ["Zurich", "Geneva","Vienna"]
  }
];

// Code to export each country from the Country Collection array of objects
export const useJapanCountry = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
        return country
    }
  }
};
export const useIcelandCountry = () => {
  for (const country of countryCollection) {
    if (country.name === "Iceland") {
        return country
    }
  }
};

export const useMoroccoCountry = () => {
  for (const country of countryCollection) {
    if (country.name === "Morocco") {
        return country
    }
  }
};

export const useSingaporeCountry = () => {
  for (const country of countryCollection) {
    if (country.name === "Singapore") {
        return country
    }
  }
};

export const useSwitzerlandCountry = () => {
  for (const country of countryCollection) {
    if (country.name === "Switzerland") {
        return country
    }
  }
};



// Code to export only the array of cities for each specific country

export const useJapanCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
      return country.cities
      };
  }
}

export const useIcelandCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Iceland") {
    return country.cities
    }
  }
};

export const useMoroccoCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Morocco") {
    return country.cities
    }
  }
};

export const useSingaporeCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Singapore") {
    return country.cities
    }
  }
};

export const useSwitzerlandCity = () => {
  for (const country of countryCollection) {
    if (country.name === "Switzerland") {
    return country.cities
    }
  }
};

// Code to export only the array of landmarks for each specific country



export const useJapanLandmarks = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
    return country.landmarks
    }
  }
};

export const useIcelandLandmarks = () => {
  for (const country of countryCollection) {
    if (country.name === "Iceland") {
    return country.landmarks
    }
  }
};

export const useMoroccoLandmarks = () => {
  for (const country of countryCollection) {
    if (country.name === "Morocco") {
    return country.landmarks
    }
  }
};

export const useSingaporeLandmarks = () => {
  for (const country of countryCollection) {
    if (country.name === "Singapore") {
    return country.landmarks
    }
  }
};

export const useSwitzerlandLandmarks = () => {
  for (const country of countryCollection) {
    if (country.name === "Switzerland") {
    return country.landmarks
    }
  }
};

// Code to export only the array of heads of states for each specific country


export const useJapanHOS = () => {
  for (const country of countryCollection) {
    if (country.name === "Japan") {
    return country.HOS
    }
  }
};

export const useIcelandHOS = () => {
  for (const country of countryCollection) {
    if (country.name === "Iceland") {
    return country.HOS
    }
  }
};

export const useMoroccoHOS = () => {
  for (const country of countryCollection) {
    if (country.name === "Morocco") {
    return country.HOS
    }
  }
};

export const useSingaporeHOS = () => {
  for (const country of countryCollection) {
    if (country.name === "Singapore") {
    return country.HOS
    }
  }
};

export const useSwitzerlandHOS = () => {
  for (const country of countryCollection) {
    if (country.name === "Switzerland") {
    return country.HOS
    }
  }
};