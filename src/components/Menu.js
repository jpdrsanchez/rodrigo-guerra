import Link from 'next/link';

const Menu = ({ current }) => {
  const menuItems = {
    ['/']: 'home',
    ['/sobre']: 'sobre',
    ['/blog']: 'blog',
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={menuItems[current] === 'home' ? 'active' : ''}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className={menuItems[current] === 'sobre' ? 'active' : ''}>
              Sobre
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={menuItems[current] === 'blog' ? 'active' : ''}>
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
