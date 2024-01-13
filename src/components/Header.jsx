import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="header">
      <Link to="/" className="app-brand">Forum App</Link>
    </section>
  );
}

export default Header;
