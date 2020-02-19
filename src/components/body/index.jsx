
import React from 'react';

import './styles.scss'
import Home from './Home'
import About from './About'
import Artwork from './Artwork'

import {
  Switch,
  Route,
} from "react-router-dom";



export default function Body() {
  return (
    <div className="Body">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/artwork">
            <Artwork />
          </Route>
        </Switch>
    </div>
  );
}

