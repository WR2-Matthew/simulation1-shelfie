import React, { Component } from 'react'
import './Form.css'
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      image: '',
      name: '',
      price: '',
      id: null,
      editing: false,
      selected: []
    }
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   const { currentProd } = this.props
  //   if (prevProps !== currentProd && prevState !== this.state) {
  //     this.setState({
  //       image: currentProd.image,
  //       name: currentProd.name,
  //       price: currentProd.price,
  //       id: currentProd.id
  //     })
  //   }
  // }

  componentDidMount = () => {
    this.prodToState()
  }

  prodToState = () => {
    axios
      .get(`/api/single/${this.props.match.params.id}`)
      .then(res => {
        // console.log(res.data)
        this.setState({ selected: res.data, editing: true })
      })
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
    const { name, price, image } = this.state
    const body = {
      name,
      price,
      image
    }
    axios
      .post('/api/product', body)
      .then(this.cancel())
  }

  render() {
    const { image, name, price, selected } = this.state
    console.log(selected)
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