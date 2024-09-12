import Link from 'next/link';
import drinkImg from './drink.jpg';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const fetchSingleDrink = async (id) => {
  const resp = await fetch(`${url}${id}`);
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }
  const data = await resp.json();
  return data;
};
const SinglePage = async ({ params }) => {
  const singleDrink = await fetchSingleDrink(params.id);
  const name = singleDrink.drinks[0].strDrink;
  const image = singleDrink.drinks[0].strDrinkThumb;
  return (
    <div className='flex flex-col gap-4 max-w-xl'>
      <Link href={'/drinks'} className='btn btn-success'>
        Back Home
      </Link>
      <h1 className='text-xl'>{name}</h1>
      <Image
        src={image}
        width={300}
        height={300}
        priority
        alt={name}
        className='w-48 h-48 rounded'
      />
    </div>
  );
};
export default SinglePage;
