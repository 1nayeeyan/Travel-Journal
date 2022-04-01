import React from 'react';
import headerIcon from '../images/airplane-takeoff.png';

export default function Header() {
  return (
    <header>
      <img src={headerIcon} alt="Airplane" />
      <h1>Yanik&apos;s Journeys</h1>
    </header>
  );
}
