/* eslint-disable no-console */
/* eslint-disable no-shadow */
function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const map = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(map);

  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  const request = await fetch(endpoint);

  const restaurants = await request.json();
  console.log(restaurants);
  function findMatches(ZipToMatch, restaurants) {
    return restaurants.filter((place) => {
      const regex = new RegExp(ZipToMatch, 'gi');
      return place.zip.match(regex);
    });
  }

  function displayMatches(event) {
    console.log(event.target.value);
    const matchArray = findMatches(event.target.value, restaurants);
    console.log(matchArray);

    const htmlstuff = matchArray.map((place) => {
      const regex = new RegExp(event.target.value, 'gi');
      const zipMatch = place.zip.replace(regex, `<span class='hl'>${event.target.value}</span>`);

      return `
        <div class="result"
          <li>
            <span class="name is-capitalized is-size-4">${place.name.toLowerCase()}</span>
            <span class="category is-capitalized">${place.category.toLowerCase()}</span>
            <address>${place.address_line_1.toUpperCase()}<br> ${zipMatch}</address>
          </li>
        </div>`;
    }).join('');

    // eslint-disable-next-line no-use-before-define
    results.innerHTML = htmlstuff;
    console.log(htmlstuff);
  }

  const searchInput = document.querySelector('#search');
  const results = document.querySelector('.results');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
  console.log(searchInput);
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;