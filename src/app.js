import React, { Component } from 'react';
import 'reset-css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Header from './components/header/header';
import HeaderM from './components/headerM/headerM';
import HeaderPhoto from './components/header_photo/header_photo';
import News from './components/news/news';
import Contacts from './components/contacts/contacts';
import Maps from './components/map/map';
import MainMenu from './components/main_menu/main_menu';
import Slider from './components/slider/slider';
import SeasonBtn from './components/season_btn/season_btn';

// import ThankOrder from './components/ordertable/thankorder/thankorder';
// import TableForm from './components/ordertable/form/tableform';


import MainRouter from './components/router/router'

import Home from './components/router/home'
import Menu from './components/router/menu'
import Photo from './components/router/photo'
import New from './components/router/new'
import Contact from './components/router/contact'
import FirstPage from './components/router/firstPage'


export default class App extends Component {
  render() {
    return (
      <Router>

        <div className='app'>
          <Nav />

          <Route path='/main-header' exact>
            <Home />
          </Route>

          <Route path='/menu' exact>
            <Menu />
          </Route>

          <Route path='/photo' exact>
            <Photo />
          </Route>

          <Route path='/news' exact>
            <New />
          </Route>

          <Route path='/contacts' exact>
            <Contact />
          </Route>

          <Route path='/' exact>
            <FirstPage />
          </Route>

          <Footer />
        </div>
      </Router>
    );
  }
}
