

import {createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action) =>{

            //in vanilla(older) redux we shoul not mutate the state
            // we are mutating the state over herer  state.items.push(action.payload); this was prohivited inside redux older
            // in older redux we create a copy of this state 
            // redux says never mutate or modified the state
            // const newState = [...state]
            // newState.items.push(action.payload);
            // return newState

            // in Redux toolkit we have to mutate the state
            // behind the scene redux is creating and immutable the state
            // behind the scene redux uses something known as immer js libraray 
            // basically immer libraray finding the difference between original state and mutating state and gives you back a immutable state
            // RTK use immer js library behind the scene
            state.items.push(action.payload);
           
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCart:(state) => {

            // state = ["akshay"] if you are doing like this basically you are not  mutating the state you are give reference
            state.items.length = 0; //make as state=[]
        }
    }
})


// export the actions
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
