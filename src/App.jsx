import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { setDrawer, removeFromBasket } from '../src/redux/Slices/basketSlice.jsx';
import Drawer from '@mui/material/Drawer';
import Header from '../src/components/header';
import RouterConfig from '../src/config/RouterConfig';
import Loading from '../src/components/Loading.jsx';
import '../src/css/App.css';
import '../src/css/header.css';

function App() {
  const dispatch = useDispatch();
  const { products, totalAmount, drawer } = useSelector((store) => store.basket);

  return (
    <div>
      <Header/>
      <RouterConfig />
      <Loading/>
      <Drawer className='drawer' onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
        {products && products.map((product) => (
          <div key={product.id} className='flex-row' style={{margin:'5px'}}>
            <img style={{marginRight:"10px"}} src={product.image} width={50} height={50} alt="Məhsul Fotosu" />
            <p style={{ fontFamily:"arial", fontWeight:"600" ,fontSize:"15px", width:'350px' ,marginRight:"10px"}}>
              {product.title}({product.count})
            </p>
            <p style={{fontWeight:"800" ,fontSize:"20px"}}>{product.price}₼</p>
            <button className='delete-button' onClick={() => dispatch(removeFromBasket(product.id))}>
              <MdDelete style={{fontSize:"15px"}}/>
            </button>
          </div>
        ))}
        <div style={{textAlign:'center', marginTop:'20px'}}>
          <h2>Cəmi: {totalAmount}₼</h2>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
