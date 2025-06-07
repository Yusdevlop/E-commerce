import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom'
function product({product}) {
    const {id, price,image ,title , description} = product; 

    const navigate = useNavigate();


  return (
    <div className='card'>
      <img className='image' src={image} alt="" />
    <div>
        <p>{title}</p>
        <h3>{price}₼</h3>
    </div>
    <div>
        <button onClick={() => navigate("/product-details/"+ id )} className='detal-button'>Detalları gör</button>
    </div>
    </div>
  )
}

export default product
