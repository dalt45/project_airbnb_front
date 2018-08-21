import React from 'react';
import {render} from 'react-dom';
import AppRouter from './router/approuter'

const AppContainer = document.getElementById('app');

render(<AppRouter/>, AppContainer);