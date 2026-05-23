import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { gymData } from '../data/gymData.js';

const navItems = [
  { to: '/', label: 'მთავარი' },
  { to: '/about', label: 'ჩვენს შესახებ' },
  { to: '/services', label: 'სერვისები' },
  { to: '/pricing', label: 'ფასები' },
  { to: '/contact', label: 'კონტაქტი' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-link" to="/" aria-label="მთავარ გვერდზე გადასვლა">
          <span className="brand-mark">
            <img src="public\images\logo.png" alt="Pro Fitness Digomi" />
          </span>
          <span>
            <strong>{gymData.name}</strong>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="ნავიგაციის გახსნა"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="მთავარი ნავიგაცია">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-call" href={gymData.phones[0].href} aria-label="დარეკვა Pro fitness Digomi-ში">
            დარეკვა
          </a>
        </nav>
      </div>
    </header>
  );
}
