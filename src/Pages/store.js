import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../Pages/customerSlice';
import taskReducer from '../Pages/taskSlice';

const store=configureStore({
    reducer:{
        Customers:customerReducer,
        task:taskReducer,
    },
});
export default store;