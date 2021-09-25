import React from 'react';
import './mainTap.scss';

import Message from './components/message'

const MainTap = () => {
  return (
    <div id="grid">
      <main className="main-section">
        <Message />
      </main>
      <footer className="buttons-section">
      </footer>
    </div>
  )
}

export default MainTap;