import React, { Component } from 'react';
import { Switch, Route } from'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Details from './components/Details';
import Productlist from './components/Productlist';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { dom } from '@fortawesome/fontawesome-svg-core'
import HomePage from './components/HomePage';
import BottomBar from './components/BottomBar';

dom.watch()






function App() {
  
    return(
      /*Page structure and components with path*/
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/details" component={Details}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/products" component={Productlist}/>
          <Route  component={Default} />
        </Switch> 
        <BottomBar/>
        <Modal/>
      </React.Fragment>
    );
  }
export default App;
