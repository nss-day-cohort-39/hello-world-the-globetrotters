
import { useJapanCountry, useIcelandCountry, useMoroccoCountry, useSingaporeCountry, useSwitzerlandCountry } from "./CountryDataProvider.js";
import Country from "./Country.js";

//individual country creator functions to send to each country's specific main.js file

export const JapanCountryList = () => {
  const contentElement = document.querySelector(".country");
  const country = useJapanCountry();
 
  contentElement.innerHTML += Country(country)
};


export const IcelandCountryList = () => {
  const contentElement = document.querySelector(".country");
  const country = useIcelandCountry();
 
  contentElement.innerHTML += Country(country)
};


export const MoroccoCountryList = () => {
  const contentElement = document.querySelector(".country");
  const country = useMoroccoCountry();
 
  contentElement.innerHTML += Country(country)
};


export const SingaporeCountryList = () => {
  const contentElement = document.querySelector(".country");
  const country = useSingaporeCountry();
 
  contentElement.innerHTML += Country(country)
};

export const SwitzerlandCountryList = () => {
  const contentElement = document.querySelector(".country");
  const country = useSwitzerlandCountry();
 
  contentElement.innerHTML += Country(country)
};