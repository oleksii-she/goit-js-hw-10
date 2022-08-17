import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const debounce = require('lodash.debounce');

const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

function handlerSearchCountri(e) {
  const nameSearc = e.target.value.trim();
  fetchCountries(nameSearc).then(data => creatMarkup(data));
}

function creatMarkup(obj) {
  console.log(obj);
  const markup = obj.map(el => {
    return `<li><img src="${el.flags.png}" alt="flags" width="35"><span class="country-span">${el.name.official}</span></li>`;
  });
  countryList.innerHTML = markup;
  console.log(markup);
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
