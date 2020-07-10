import React, { Component } from 'react';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
import Header from './components/Header/Header';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './App.css';
import routes from './routes'

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }



  render() {
    // const { inventory, currentProd } = this.state
    return (
      <div className="App">
        <Header />
        <div className='appTwo'>
          {routes}
        </div>
      </div>

    );
  }
}

export default withRouter(App);
