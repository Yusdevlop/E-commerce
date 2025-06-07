import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import {setSelectedProduct} from '../redux/Slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/productDetails.css';
import { useState } from 'react';
import { addToBasket } from '../redux/Slices/basketSlice';


function productDetails() {

  const {id} = useParams();
  const {products , selectedProduct} = useSelector((store) => store.product);

  const {price , image , title , description} = selectedProduct;

  const [count , setCount] = useState(0);

  const handleIncrement = () => {
      setCount(count + 1);
  }
    const handleDecrement = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
     }

  const dispatch = useDispatch();

  useEffect(() => {
    getProductByID();
  },[])

    const getProductByID = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }   
        })
    }


    const addBasket = () => {
      const payload = {
        id,
        price,
        image,
        description,
        title,
        count
      }

      dispatch(addToBasket(payload));
      dispatch(calculateBasket());
    }

  return (
    <div style={{display: "flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
        <div><img src={selectedProduct.image} width={400} height={450} alt="" /></div>
        <div style={{width:"500px",marginLeft:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3 style={{fontFamily:"sans-serif",fontSize:"35px", fontWeight:"600"}}>{selectedProduct.title}</h3>
            <h5 style={{fontFamily:"arial",fontSize:"20px", fontWeight:"200"}}>{selectedProduct.description}</h5>
            <h2 style={{fontFamily:"sans-serif",fontSize:"30px", fontWeight:"800"}}>{selectedProduct.price}₼</h2>


            <div><CiCirclePlus onClick={handleIncrement} style={{fontSize:"50px",marginLeft:"10px",marginRight:"10px",cursor:"pointer"}}/>
            <span style={{fontSize:"50px"}}>{count}</span>
            <CiCircleMinus onClick={handleDecrement} style={{fontSize:"50px",marginLeft:"10px",
                marginRight:"10px",cursor:"pointer"}}/></div>
                <button onClick={addBasket} className='add-to-basket'>Səbətə əlavə et</button>
        </div>
        
        
    </div>
  )
}

export default productDetails
