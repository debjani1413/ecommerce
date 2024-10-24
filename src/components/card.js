import React from 'react';

const Card = ({productImg,title,price,currency}) => {
  return (
      <div className='card'>
        <div className='product-img'>
        <img src={productImg} alt='product' />
        </div>
        <div className='card-desc'>
            <h2>{title}</h2>
            <span>${price} </span>
            <span>{currency}</span>
        </div>
      </div>
  )
}

export default Card;
