import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import Card from "./card";

const Filtered = () => {

  const location = useLocation();
  const products = useProduct();
  const [filteredProducts,setFilteredProducts] = useState([]);

  const query = new URLSearchParams(location.search);
  const searchValue = query.get('search') || '';

  useEffect(() => {
    if (searchValue.trim() === '') {
        setFilteredProducts([]);
      } 
    else {
        const filtered = products.filter(({node}) => {
            return node?.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        setFilteredProducts(filtered);
    }

  },[searchValue,products]);

  return (
    <div className='results'>
      {filteredProducts.length > 0 ? (
        <div className='found'>
        <p className='product-found'>Found {filteredProducts.length} products with keyword "{searchValue}"</p>
        <div className='product'>
        {filteredProducts.map(({node}) => {
            return (
                <Card 
                key={node.id}
                productImg={node?.featuredImage?.url}
                title={node?.title}
                price={node?.variants?.edges[0]?.node?.price?.amount} 
                currency={node?.variants?.edges[0]?.node?.price?.currencyCode}
                />
            );
        })}
        </div>
        </div>
      ) : (<div className='results'> <p className='product-found'>No Product Found "{searchValue}" </p></div>)}
    </div>
  )
}

export default Filtered;
