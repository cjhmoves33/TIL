import React from 'react';
import './mainTap.scss';
import { Switch, Route } from 'react-router';

// mainPage components
import Message from './mainPage/message'
import Button from './mainPage/button';

const MainTap = () => {
  return (
    <div id="grid">
      <main className="main-section">
        <Switch>
          <Route exact path='/' component={Message}/>
        </Switch>
      </main>
      <footer className="buttons-section">
        <Button />
      </footer>
    </div>
  )
}

export default MainTap;