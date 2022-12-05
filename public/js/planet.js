
const selectedPlanetTitle = document.querySelector('.selected-planet-title');

const BASE_URL = 'https://swapi.dev';

const fetchPlanets = () => {
  console.log('1. Fetch planets started...');

  // Default request type is GET
  const response = fetch(
    `${BASE_URL}/api/planets/`
  ).then((data) => {
      console.log('2. data', data);
      return data.json();
    })
    .then((json) => {
      console.log('3. json', json);
      renderPlanets(json);
    })
    .catch((error) => {
      console.log('4. error', error);
    })
    .finally(() => {
      console.log('5. finally')
    });

  console.log('6. response', response);
};

fetchPlanets();

function renderPlanets(json) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  console.log(params.name);
  console.log(json.results.find((item) => item.name === params.name));

  selectedPlanetTitle.innerHTML = params.name
}

selectedPlanetTitle.style.color = 'red';
selectedPlanetTitle.style.fontSize = '40px';