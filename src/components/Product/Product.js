import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

export default class Product extends Component {

  render() {
    const { name, price, image, productId, deleteProd, edit } = this.props
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
            <Link to={`/edit/${productId}`}>
              <button className='prodButtons'>Edit</button>
            </Link>
          </div>
        </div>


      </div>
    )
  }
}