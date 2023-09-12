import {createSlice} from '@reduxjs/toolkit'
import {getProductFromAPINew} from '../middleware/ProductMiddleware'

const initialState={
    data:[],
    status:'idle'
}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProducts(state,action){
            // console.log(action)
            //  state.push(action.payload)
            state.data =action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProductFromAPINew.pending,(state,action)=>{
            state.status='loading'
        }).addCase(getProductFromAPINew.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='idle'
        }).addCase(getProductFromAPINew.rejected,(state,action)=>{
            state.status='error'
        })
    }
})

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer

// export const  getProductFromAPI= createAsyncThunk('products',async()=>{
//     const data = await fetch('https://fakestoreapi.com/products')
//     const result = await data.json();
//     return result;
// })
    



// export const  getProductFromAPI= ()=>{
//     return  async function(dispatch,getState){
//             const data = await fetch('https://fakestoreapi.com/products')
//             const result = await data.json();
//             // console.log(result)
//             dispatch(fetchProducts(result))
//         }
// }