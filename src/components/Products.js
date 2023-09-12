import { useEffect } from "react";
import Cards from '../containers/Cards'
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/CartSlice'
import {getProductFromAPINew} from '../middleware/ProductMiddleware'


const Products=()=>{

const {data:products,status} = useSelector(state=>state.products)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getProductFromAPINew())
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

    return(
        <div>
            <h1>Product Dashboard</h1>
            <div className="row">
            <Cards data={products} addTocart={(product)=>addTocart(product)} type={"Product"}/>
            </div>
            </div>
    )
}
export default Products;