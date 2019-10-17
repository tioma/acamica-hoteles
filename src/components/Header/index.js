import React from 'react';

const Header = ({ hotels }) => (
  <header>
    <h1>Proyecto Hoteles</h1>
    { hotels.length
      ? <p>Se han encontrado: {hotels.length} hoteles</p>
      : <p>No se han encontrado hoteles</p>
    }
  </header>
)

export default Header;
