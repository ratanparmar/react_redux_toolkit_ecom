
import {useSelector,useDispatch} from 'react-redux'
import Cards from '../containers/Cards';
import {remove} from '../store/CartSlice'


const Cart=()=>{
const productsInCart =useSelector(state=>state.cart)
const dispatch =useDispatch()

const removeFromCart =(product)=>{
    
    var id = product.id
    // console.log(id)
    dispatch(remove(id))
}
    return(
        <div>
            <h1>Cart</h1>
            {/* {JSON.stringify(productsInCart)} */}
            <div className="row" style={{width:'30%',textAlign:'center'}}>
                <Cards data={productsInCart} addTocart={(product)=>removeFromCart(product)}/>
            </div>
        </div>
    )
}
export default  Cart;
