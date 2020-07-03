import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProd: {
        name: '',
        price: '',
        image: '',
        id: null
      }
    }
  }

  componentDidMount = () => {
    this.retrieveData()
  }

  retrieveData = () => {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({ inventory: res.data })
      })
  }

  editProduct = (id, name, price, image) => {
    this.setState
  }

  render() {
    const { inventory } = this.state
    return (
      <div className="App">
        <Header />
        <div className='appTwo'>
          <Dashboard inventory={inventory} retrieve={this.retrieveData} />
          <Form retrieve={this.retrieveData} />
        </div>
      </div>

    );
  }
}

export default App;
