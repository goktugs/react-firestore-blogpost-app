import React from 'react';
import Nav from './Nav';

export default function layout({ children }) {
  return (
    <div>
      <Nav />
      <main> {{ children }} </main>
    </div>
  );
}
