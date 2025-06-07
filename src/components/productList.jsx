import React from 'react';
import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { getAllProducts } from '../redux/Slices/productSlice';
import Product from './product';
function productList() {

    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product);
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
  return (
    <div className='flex-row' style={{ flexWrap: 'wrap'}}>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product}/>
        ))
    }
    </div>
  )
}

export default productList
