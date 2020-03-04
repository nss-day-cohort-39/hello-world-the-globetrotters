const Country = (country) => {
    return `
        
        <section class="main">
    <img class="countryImage animation" src="${country.image}" alt="${country["image alt"]}">
    <header class="countryName">${country.name}</header>
    </section>
    <section class="countryDetail">
    <article class="countryDetail__box" id="countryCities">
        <ul class="countryDetail__list">
            <lh class="countryDetail__listName">Cities</lh>
            <div class="countryDetail__listCities">
            </div>        
        </ul>
    </article>
    <article class="countryDetail__box" id="countryLandmarks">
        <ul class="countryDetail__list">
            <lh class="countryDetail__listName">Landmarks</lh>
            <li class="countryDetail__listItem">Mount Fuji</li>
            <li class="countryDetail__listItem">Shibuya Crossing</li>
            <li class="countryDetail__listItem">Hiroshima Peace Park</li>       
        </ul>
    </article>

    <article class="countryDetail__box" id="countryHOS">
        <ul class="countryDetail__list">
            <lh class="countryDetail__listName">Heads of State</lh>
            <li class="countryDetail__listItem">Emperor Naruhito</li>
            <li class="countryDetail__listItem">Prime Minister Shinzo Abe</li>       
        </ul>
    </article>
    </section>

    `
}

export default Country

