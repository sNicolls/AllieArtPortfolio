
import React from 'react';
import Header from '../header';
import Body from '../body'
import Footer from '../footer'
import './styles.scss'
import {
    BrowserRouter as Router,
  } from "react-router-dom";


export default function Main() {
  return (
      <Router>
        <div className="SiteWrapper">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    </Router>
  );
}