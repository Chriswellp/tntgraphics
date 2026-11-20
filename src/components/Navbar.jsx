
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <Link
        to="/home"
        className="main-brand"
        onClick={closeMenu}
      >
        <span>TNT</span> GRAPHICS
        <small>CREATIVE DESIGN STUDIO</small>
      </Link>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
        <Link to="/home#home" onClick={closeMenu}>Home</Link>
        <Link to="/home#about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/home#portfolio" onClick={closeMenu}>Portfolio</Link>
        <Link to="/home#reviews" onClick={closeMenu}>Reviews</Link>
         <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/home#contact" onClick={closeMenu}>Contact</Link>

        <Link
          to="/home#contact"
          className="nav-order"
          onClick={closeMenu}
        >
          Start an Order <ArrowUpRight size={16} />
        </Link>

      </nav>
    </header>
  );
}
