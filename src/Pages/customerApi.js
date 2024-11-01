import axios from "axios";
import { useDispatch } from "react-redux";
import { getCustomer } from "../Pages/customerSlice"; // Ensure correct path



export const fetchCustomers = async (dispatch) => {
    // const dispatch = useDispatch(); // Move dispatch inside the function
    try {
        const res = await axios.get('https://first-2-cygu.onrender.com/CustomerDetails/getAll');
        dispatch(getCustomer(res.data)); // Dispatch the action with fetched data
    } catch (error) {
        console.error("Error fetching customers:", error);
        // Handle the error, e.g., dispatch an error action or show a notification
    }
};

export const postCustomers=async(body,dispatch)=>{
    try{
        const res=await axios.post('https://first-2-cygu.onrender.com/CustomerDetails/register',body);
        // dispatch(addCustomer(res.data));
        fetchCustomers(dispatch);
    }catch(error){
        console.error("Error registering cutomer:",error);
    }
};
export const deleteCustomersId=async(id,dispatch)=>{
    const res=await axios.delete(`https://first-2-cygu.onrender.com/CustomerDetails/delete/${id}`);
    fetchCustomers(dispatch);

};
export const updateCustomer = async (data, dispatch) => {
    try {
        const res = await axios.put(`https://first-2-cygu.onrender.com/CustomerDetails/update/${data?._id}`, data);
        // Optionally dispatch an action to update the Redux store
        // dispatch({ type: 'UPDATE_CUSTOMER', payload: res.data });
        fetchCustomers(dispatch); // Refresh the customer list
    } catch (error) {
        console.error("Error updating customer:", error);
    }
};
