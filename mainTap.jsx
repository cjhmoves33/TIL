import React from 'react';
import './mainTap.scss';
import { Switch, Route, Link  } from 'react-router-dom';

// mainPage components
import Message from './mainPage/message';
import Button from './mainPage/button';

// components
import Ball from './components/ball';
import Login from './components/login';


const MainTap = () => {
  return (
    <div id="grid">
      <main className="main-section">
        <Switch>
          <Route exact path='/' component={Message}/>
          <Route path='/ball' component={Ball} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
      <footer className="buttons-section">
        <Link to="/ball" ><Button name={'ball'}/></Link>
        <Link to="/login" ><Button name={'login'}/></Link>
      </footer>
    </div>
  )
}

export default MainTap;