import React, { Component } from 'react'
import './Form.css'
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      image: '',
      name: '',
      price: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  cancel = () => {
    this.setState({
      image: '',
      name: '',
      price: ''
    })
  }

  addToInventory = () => {
    const { retrieve } = this.props
    const { name, price, image } = this.state
    const body = {
      name,
      price,
      image
    }
    axios
      .post('/api/product', body)
      .then(() => retrieve())
      .then(this.cancel())
  }

  render() {
    const { image, name, price } = this.state

    return (

      <div className='formHolder'>
        <div className='form'>

          <div className='imageHolder'>
            {!image ?
              <img className='imageee' alt='thing' src='https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' />
              : <img className='imageee' alt='prod' src={`${image}`} />
            }
          </div>

          <div className='inputHolder'>
            <label>Image URL:</label>
            <input name='image' value={image} onChange={(e) => this.handleChange(e)} />

            <label>Product Name:</label>
            <input name='name' value={name} onChange={(e) => this.handleChange(e)} />

            <label>Price:</label>
            <input name='price' value={price} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className='buttonHolder'>
            <button className='formButtonOne' onClick={() => this.cancel}>Cancel</button>
            <button className='formButtonTwo' onClick={() => this.addToInventory()} >Add to Inventory</button>
          </div>

        </div>
      </div>
    )
  }
}