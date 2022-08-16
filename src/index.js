import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const debounce = require('lodash.debounce');

const search = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

const countryListItem = document.createElement('li');
countryList.append(countryListItem);

function handlerSearchCountri(e) {
  const nameSearc = e.target.value.trim();
  fetchCountries(nameSearc).then(data => creatMarkup(data));
}
function creatMarkup(obj) {
  const countri = obj[0].name.official;
  countryListItem.textContent = countri;
  console.log(countri);
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
