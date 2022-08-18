import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const debounce = require('lodash.debounce');

const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
function handlerSearchCountri(e) {
  const nameSearc = e.target.value.trim();
  if (nameSearc.length < 2) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name'
    );
  } else {
    fetchCountries(nameSearc)
      .then(data => creatMarkup(data))
      .catch(err =>
        Notiflix.Notify.failure(err, 'Oops, there is no country with that name')
      );
  }
  if (nameSearc === ' ') {
    countryList.innerHTML = '';
  }
}

function creatMarkup(obj) {
  console.log(obj);
  if (obj.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name'
    );
    return;
  }

  // if ((obj.length = 1)) {

  // }
  if (obj.length >= 2) {
    const markup = obj
      .map(el => {
        return `<li><img src="${el.flags.svg}" width="35"><span class="country-span">${el.name.official}</span></li>`;
      })
      .join(' ');

    countryList.innerHTML = markup;
  } else {
    const markupInfo = obj
      .map(el => {
        return `<div class="country-info_box"><img src="${
          el.flags.png
        }" height="30" ><h2  class="country-title">${
          el.name.official
        }</h2></div><ul  class="country-info_list">
    <li>Capiatal: ${el.capital}</li>
    <li>Population: ${el.population}</li>
    <li>Languages: ${Object.values(el.languages)}</li>
    </ul>
   `;
      })
      .join(' ')
      .replaceAll(',', ', ');

    countryInfo.innerHTML = markupInfo;
    console.log(markupInfo);
  }
}

//   const coutri = obj.map(el => el.name.official);
//   console.log(coutri);

//     const
//   return `<li>
// <img src="" alt="" />
// <h2>name</h2>
// </li>
// </ul>`;

// name:
// common: "Ukraine"
// nativeName: {ukr: {…}}
// official: "Ukraine"
search.addEventListener('input', debounce(handlerSearchCountri, 300));
