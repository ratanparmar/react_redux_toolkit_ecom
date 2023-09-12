import {createAsyncThunk} from '@reduxjs/toolkit'

export const  getProductFromAPINew= createAsyncThunk('products',async()=>{
    console.log("I am getting called")
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
})