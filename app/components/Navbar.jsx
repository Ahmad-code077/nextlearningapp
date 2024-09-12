import Link from 'next/link';

const links = [
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/prisma-example', label: 'prisma' },
  { href: '/tasks', label: 'tasks' },
  { href: '/auth', label: 'auth' },
  { href: 'auth/login', label: 'login' },
];

const Navbar = () => {
  return (
    <nav className='bg-base-300'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link className='btn btn-primary' href={'/'}>
          Home
        </Link>
        <ul className='menu menu-horizontal gap-4  ml-2'>
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link className='' href={link.href}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
