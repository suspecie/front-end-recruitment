import React from 'react';
import './App.css';
import Home from './components/home/home';
import Cart from "./components/cart/cart";
import { Switch, Route } from 'react-router-dom'



function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </main>
  );
}

export default App;
