const fetchDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }
  const data = await resp.json();
  return data;
};

const Drinks = async () => {
  const result = await fetchDrinks();
  console.log(result);
  return (
    <div>
      <h1>Drinks</h1>
    </div>
  );
};
export default Drinks;
