import DrinksList from '@/app/components/DrinksList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch drinks...');
  }
  const data = await response.json();
  return data;
};

const Drinks = async () => {
  const drinks = await fetchDrinks(); // This fetches server-side in Next.js
  return (
    <div>
      <DrinksList drinks={drinks} />
    </div>
  );
};

export default Drinks;
