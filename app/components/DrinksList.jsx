import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  console.log(drinks);
  return (
    <ul className='menu menu-vertical pl-0'>
      {drinks.drinks?.map((drink) => {
        return (
          <Link
            href={`/drinks/${drink.idDrink}`}
            className='text-xl'
            key={drink.idDrink}
          >
            {drink.strDrink}
          </Link>
        );
      })}
    </ul>
  );
};
export default DrinksList;
