export { fetchCountries };

function fetchCountries(name) {
  const responce = fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(res => res.json());
  return responce;
}
