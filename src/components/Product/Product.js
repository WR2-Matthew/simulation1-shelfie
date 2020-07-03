import React, { Component } from 'react'
import axios from 'axios'
import './Product.css'

export default class Product extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    const { name, price, image, productId, deleteProd } = this.props
    return (

      <div className='infoBox'>
        <div className='prodImgHolder'>
          <img className='prodImage' src={image} alt='product' />
        </div>

        <div className='descriptionHolder'>
          <div>
            <span>{name}</span>
            <span>{`$${price}`}</span>
          </div>

          <div className='prodButtonsHolder'>
            <button className='prodButtons' onClick={() => deleteProd(productId)} >Delete</button>
            <button className='prodButtons'>Edit</button>
          </div>
        </div>


      </div>
    )
  }
}