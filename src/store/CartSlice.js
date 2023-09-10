import {createSlice,current} from '@reduxjs/toolkit'

const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
             state.push(action.payload)
        },
        remove(state,action){
            console.log(state,action)
            console.log(current(state));
            // console.log(action,state)
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer