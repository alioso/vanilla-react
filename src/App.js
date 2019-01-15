import React, { Component } from "react";

import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";

import './css/style.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
      </React.Fragment>
    );
  }
}

export default App;
