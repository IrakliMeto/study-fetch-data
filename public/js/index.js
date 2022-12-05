// HTTP მოთხოვნების ყველაზე ხშირად გამოყენებული ტიპებია / პროტოკოლებია:
//    GET - უმეტესად გამოიყენება ინფორმაციის მისაღებად
//    POST - უმეტესად გამოიყენება ახალი ინფორმაციის შესანახად
//    PUT - უმეტესად გამოიყენება ინფორმაციის გასაახლებლად
//    PATCH - უმეტესად გამოიყენება ინფორმაციის ნაწილობრივ გასაახლებლად
//    DELETE - უმეტესად გამოიყენება ინფორმაციის წასაშლელად


const BASE_URL = 'https://swapi.dev';
let selectedPlanet = null;
const planetsHolder = document.querySelector('.planet-holder');
const selectedPlanetHolder = document.querySelector('.selected-planet-holder');
const planetTitle = document.querySelector('.planet-title');
const backButton = document.querySelector('.back-button');

selectedPlanetHolder.style.display = 'none';

const renderPlanets = (data) => {
  console.log('>>> Rendering planets has began:', data.results);

  const planets = document.querySelector('#planets');

  data.results.forEach((item, index) => {
    //ვაკეთებთ ახალ ლი/ა ელემენტს
    const planetItem = document.createElement('li');
    const planetLink = document.createElement('a');
    console.log(index, item);
    // ჩავწეროთ ლი ელემენტში ინფორმაცია
    planetLink.innerHTML = item.name;
    planetLink.href = `./planet.html?name=${item.name}`;
    planetLink.target = "_blank";

    //დავამატოთ ლი და ლინკ ელემენტი პლანეტებს
    planets.appendChild(planetItem);
    planetItem.appendChild(planetLink);

    // ლინკის სტილები
    planetLink.style.cursor = 'pointer';
    planetLink.style.color = 'green';
    planetLink.style.fontSize = '20px';

    planetLink.addEventListener('click', (el)=> {
      planetsHolder.style.display = 'none';
      const clickedPlanet = el.target.textContent;
      console.log(clickedPlanet);
      selectedPlanet = data.results.find(item => item.name === clickedPlanet);
      console.log(selectedPlanet, 'selectedPlanet')
      selectedPlanetHolder.style.display = 'block';
      planetTitle.innerHTML = selectedPlanet.name;
    })
  });
}

backButton.addEventListener('click', ()=> {
  selectedPlanet = null;
  selectedPlanetHolder.style.display = 'none';
  planetsHolder.style.display = 'block';
})


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
}

const setStylesToButton = (button) => {
  button.style.color = '#22f';
  button.style.border = '1px solid #22f';
  button.style.backgroundColor = 'transparent';
  button.style.padding = '12px 18px';
  button.style.cursor = 'pointer';
}

setStylesToButton(backButton);

const setActionsToButton = () => {
  // Get button element from HTML
  const button = document.getElementById('fetch-data');

  // Set styles to button Element
  setStylesToButton(button);

  // Pass reference of fetchPlanets function to Button click listener
  button.addEventListener('click', fetchPlanets, {once :true});
}

setActionsToButton();
// https://swapi.dev/api/planets/1/

console.log('location', window.location);





















// console.log('Hello World...');
// const createUser = async () => { // ფუნქციის შესრულებას ჭირდება 10 წამი.
//
// }
//
//
// const Run = async () => {
//   // 10 წამი მოუნდება ფუნქციის შესრულებას
//   // const response = await createUser();
//
//   // 10 წამის მერე გაეშვება ეს ფუნქცია
//   // და კიდევ 10 წამი მოუნდება ფუნქციის შესრულებას
//   // const response2 = await createUser();
//
//
//
//
// }
//
// Run();
//
//
//
//
//
