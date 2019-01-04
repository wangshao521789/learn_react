import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
const Hello=()=>{};
class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <Search />
        <Results />
      </div>
    )
  }
}

export default App;
