import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PiHandWavingBold } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { fetchCustomers, postCustomers, updateCustomer } from './customerApi';
import '../Pages/Custormers.css';
import { deleteCustomersId } from './customerApi';


const Custormers = () => {
  const [customerData, setCustomerData] = useState({
    customerName: '',
    companyName: '',
    mobileNo: '',
    email: '',
    country: '',
    status: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.Customers);

  useEffect(() => {
    fetchCustomers(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };
   const handleDelete=async(id)=>{
    try{
      await deleteCustomersId(id,dispatch);
    }catch(error){
      console.error("Error deleting Customer",error);
    }

   };
   const handleUpdate=async(user)=>{
    setModalOpen(true);
    setCustomerData(user);
   };

  const handleSubmit = async () => {
    console.log(JSON.stringify(customerData))
    if(customerData?._id){
      const data = {
        _id: customerData?._id,
        customerName: customerData.customerName,
        companyName: customerData.companyName,
        mobileNo: customerData.mobileNo,
        email: customerData.email,
        country: customerData.country,
        status: customerData.status
  
      }
      try{
            await updateCustomer(data,dispatch);
            setModalOpen(false);
            setCustomerData({
              customerName: '',
              companyName: '',
              mobileNo: '',
              email: '',
              country: '',
              status: '',
            });
      }catch(error){
        console.error("Error sumbmitting the from.please try again");
      }
    }else{
      const body = {
        customerName: customerData.customerName,
        companyName: customerData.companyName,
        mobileNo: customerData.mobileNo,
        email: customerData.email,
        country: customerData.country,
        status: customerData.status
      };
    
      try {
        await postCustomers(body, dispatch);
        setModalOpen(false); // Close modal after submission
    
        // Optionally, fetch customers again to update the table
        // fetchCustomers(dispatch);
      } catch (error) {
        console.error("Failed to add customer:", error);
        // Optionally, show an error message to the user
      }

    }
   
  };
  

  return (
    <>
      <div className='px-2'>
        <div className='row bg-white p-1'>
          <div className='col-9'>
            <h4>Hello Evano
            <PiHandWavingBold  style={{color:"#fbe67b"}}/>
              </h4>
          </div>
          <div className='col-3'>
            {/* <MdSearch/> */}
            <input type='text' placeholder='search' className='inputsearch'/>
          </div>
        </div>

        <div className="row myrow">
          <div className="col mycol">
            <div className="iconuser">
              {/* <FaUser /> */}
            </div>
            <div className="content">
              <p>Total Customers</p>
              <h4>5,234</h4>
              <p><strong style={{color: 'green'}}>
                {/* <FaArrowUp /> */}
                 16%</strong> this month</p>
            </div>
          </div>
          <div className="col mycol">
            <div className="iconuser">
              {/* <FaUserGroup /> */}
            </div>
            <div className="content">
              <p>Members</p>
              <h4>1,893</h4>
              <p><strong style={{color: 'red'}}>
                {/* <FaArrowDown /> */}
                 1%</strong> this month</p>
            </div>
          </div>
          <div className="col mycol">
            <div className="iconuser">
              {/* <RiComputerLine /> */}
            </div>
            <div className="content">
              <p>Active Now</p>
              <h4>189</h4>
              {/* <p className='secret'>
                <FaUserSecret style={{color: 'yellowgreen'}} />
                <FaUserNurse style={{color: '#00FFFF'}} />
                <FaUserGraduate style={{color: '#800080'}} />
                <FaUserLock style={{color: '#808000'}} />
                <FaUserGraduate style={{color: '#808000'}} />
                <FaUserCheck style={{color: '#99A3A3'}} />
                <FaUserLargeSlash style={{color: '#1F45FC'}} />
              </p> */}
            </div>
          </div>
        </div>

        <div className='activecustomer'>
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div><input type='text' placeholder='Search'/></div>

        </div>

        <div className="container mt-3">
          <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
            Post
          </button>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Post</h4>
                  <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
                </div>
                <div className="modal-body">
                  <div className='row d-flex'>
                    <div className='col-md-6'>
                      <input type='text' placeholder='Customers Name' name='customerName' onChange={handleChange} value={customerData.customerName} />
                    </div>
                    <div className='col-md-6'>
                      <input type='text' placeholder='CompanyName' name='companyName' onChange={handleChange} value={customerData.companyName} />
                    </div>
                  </div>
                  <div className='row d-flex'>
                    <div className='col-md-6'>
                      <input type='text' placeholder='mobileNo' name='mobileNo' onChange={handleChange} value={customerData.mobileNo} />
                    </div>
                    <div className='col-md-6'>
                      <input type='text' placeholder='Email' name='email' onChange={handleChange} value={customerData.email} />
                    </div>
                  </div>
                  <div className='row d-flex'>
                    <div className='col-md-6'>
                      <input type='text' placeholder='Country' name='country' onChange={handleChange} value={customerData.country} />
                    </div>
                    <div className='col-md-6'>
                      <input type='text' placeholder='Status' name='status' onChange={handleChange} value={customerData.status} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type='button' className='btn btn-info' onClick={handleSubmit}>Save</button>
                  <button type="button" className="btn btn-danger" onClick={() => setModalOpen(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='row'>
          <div className='col'>
            <table>
              <thead>
                <tr>
                  <th>Customers Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Button</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.customerName}</td>
                    <td>{user.companyName}</td>
                    <td>{user.mobileNo}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>
                      <button style={{ background: user.status === "Inactive" ? 'red' : 'green' }}>{user.status}</button>
                    </td>
                    <td><button className='btn btn-info' onClick={() => handleUpdate(user)}>Update</button></td>
                    <td><button className='btn btn-danger' onClick={ () => handleDelete(user._id)}>Delete</button></td>
                    <td><button style={{color:'green'}}>Add task</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='pagination'>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Custormers;
