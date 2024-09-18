import Image from 'next/image';
import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  // all drinks list is here
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className='text-xl font-medium'
          >
            <div className='relative h-48 mb-4'>
              <Image
                src={drink.strDrinkThumb}
                fill
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                alt={drink.strDrink}
                className='rounded-md object-cover'
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksList;
