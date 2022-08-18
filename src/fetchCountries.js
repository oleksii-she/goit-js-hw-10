export { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(res => {
    res;

    if (res.status === 404) {
      throw new Error('Error');
    } else {
      return res.json();
    }
  });
}
