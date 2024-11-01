import axios from "axios";
import getTask from '../Pages/taskSlice';

const API_URL = 'https://signup-and-login.onrender.com/EmployeeDetails';

export const fetchTask = async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/getAll`);
        dispatch(getTask(res.data));
    } catch (error) {
        // console.error("Error fetching tasks:", error);
    }
};

export const postTask = async (mybody, dispatch) => {
    try {
        await axios.post(`${API_URL}/register`, mybody);
        fetchTask(dispatch); // Fetch updated tasks after posting
    } catch (error) {
        console.error("Error registering task:", error);
    }
};

// export const updateTask=async()=>{
//     try{
//         const res=await axios.put('https://signup-and-login.onrender.com/EmployeeDetails/update')
//     }
// }