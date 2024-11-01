import { createSlice } from '@reduxjs/toolkit';
// import { deleteCustomers } from './customerApi';
const customerSlice = createSlice({
    name:'customers',
    initialState:{
        customers: [],
    },
    reducers:{
        getCustomer(state,action){
            state.customers=action.payload;
        },
        // deleteCustomers(state,action){
        //     state.customers=state.customers.filter(user=>user.id!=action.payload);
        // },
    },

});
export const { getCustomer }=customerSlice.actions;
export  default customerSlice.reducer;