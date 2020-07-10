import React, { Component } from 'react'
import Product from '../Product/Product'
import './Dasboard.css'
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    this.retrieveData()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.inventory !== this.state.inventory) {
      this.retrieveData()
    }
  }

  retrieveData = () => {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({ inventory: res.data })
      })
  }

  deleteProduct = (product_id) => {
    // console.log(product_id)
    axios
      .delete(`/api/remove/${product_id}`)
      .then(() => {
        this.retrieveData()
      })
  }

  render() {
    const { inventory } = this.state
    const mappedInv = inventory.map((e, i) => {
      return (
        <Product key={i}
          name={e.product_name}
          price={e.product_price}
          image={e.image_url}
          productId={e.product_id}
          deleteProd={this.deleteProduct}
        />
      )
    })

    return (

      <div className='dashboard' >
        <div className='dashDetailsHolder' >
          {mappedInv}
        </div>
      </div>
    )
  }
}