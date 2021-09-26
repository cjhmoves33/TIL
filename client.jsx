import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainTap from './mainTap'

ReactDOM.render(<BrowserRouter><MainTap /></BrowserRouter>, document.querySelector('#root'));