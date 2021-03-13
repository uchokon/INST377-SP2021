/* eslint-disable no-console */
/* eslint-disable no-shadow */
function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('.userform');
  const search = document.querySelector('#search');
  const list = document.querySelector('.results');

  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  // list

  // const request = await get('/api');
  // const data = await request.json();

  const request = await fetch(endpoint);
  // .then(blob => blob.json())
  // .then(data => places.push(...data));

  const places = await request.json();

  function findMatches(wordToMatch, places) {
    return places.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.name.match(regex) || place.category.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, places);
    if (event.target.value === '') {
      list.innerHTML = '';
    } else {
      const html = matchArray.map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        const nameMatch = place.name.replace(regex, `<span class='hl'>${event.target.value}</span>`);
        const catMatch = place.category.replace(regex, `<span class='hl'>${event.target.value}</span>`);
        return `
              <div class="result">
                  <li>
                      <span class="name is-capitalized is-size-4">
                        ${nameMatch.toLowerCase()}
                      </span>
                      <span class="category is-capitalized">
                        ${catMatch.toLowerCase()}
                      </span>
                      <address>
                        ${place.address_line_1.toUpperCase()}<br>
                        ${place.zip}
                      </address>
                  </li>
              </div>
              `;
      }).join('');

      list.innerHTML = html;
    }
  }

  search.addEventListener('change', displayMatches);
  search.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;