export { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(res => {
    res;
    if (res.status === 404) {
      throw new Error('ERRRRROOOORRRRRR!!!!');
    } else {
      return res.json();
    }
  });
}

// Oops, there is no country with that name

// if (res.status === 404) {
//   throw new Error('error');
// }

// .catch(err =>
//   Notiflix.Notify.failure(err, 'Oops, there is no country with that name')
// );
