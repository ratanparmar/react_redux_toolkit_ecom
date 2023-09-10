import { useEffect } from "react";
import Cards from '../containers/Cards'
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/CartSlice'
import {getProductFromAPI} from '../store/ProductSlice'
// import {getProductFromMiddleware} from '../middleware/ProductMiddleware'
const Products=()=>{

const {data:products,status} = useSelector(state=>state.products)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getProductFromAPI())
    // console.log(products)
    // getProductFromMiddleware()
    // eslint-disable-next-line
},[])



if(status==='loading'){
    return <p>Loading...</p>
}

if(status==='error'){
    return <p>Error ...</p>
}

const addTocart =(product)=>{
    // add dispatch to add to cart 
    console.log(product)
    dispatch(add(product))
}
// console.log(products)
    return(
        <div>
            <h1>Product Dashboard</h1>
            {/* <div>{JSON.stringify(products)}</div> */}
            <div className="row">
            <Cards data={products} addTocart={(product)=>addTocart(product)} type={"Product"}/>
            </div>
            </div>
    )
}
export default Products;