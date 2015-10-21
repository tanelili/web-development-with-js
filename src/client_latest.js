import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link, IndexRoute } from 'react-router';
import HelloWorld from './components/HelloWorld';
import HelloWorldApp from './components/HelloWorldApp';
import Counterizer from './components/Counterizer';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import Index from './components/Index';
import routes from './components/routes';

ReactDOM.render(
    routes,
    document.getElementById('app')
);
