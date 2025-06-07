import React from 'react';
import '../css/header.css';
import { IoMdSearch } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/Slices/basketSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {products} = useSelector((store) => store.basket);

  return (
    <div >
      <div className='header'>

        <img style={{cursor:"pointer"}}  onClick={() => navigate('/')} className='logo-img' src="/img/image-removebg-preview (1).png" alt="" />

        <div>
          <input className='header-input' type="text" placeholder='Məhsul axtar!' />
      
            <IoMdSearch className='search-icon' />
           
          

        </div>

        <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
            <FaBasketShopping  className='basket-icon'/>
        </Badge>
      </div>
    
    </div>
  );
}

export default Header;
