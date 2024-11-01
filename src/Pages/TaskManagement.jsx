import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Pages/Task.css';
import { useDispatch, useSelector } from 'react-redux';
import { postTask, fetchTask } from './taskApi';

const TaskManagement = () => {
  const [tasks, setTasks] = useState({
    empName: "",
    email: "",
    projectName: "",
    reason: "",
    description: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.task);

  useEffect(() => {
    fetchTask(dispatch);
  }, [dispatch]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setTasks({ ...tasks, [name]: value });
  };

  const handleSubmits = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const mybody = { ...tasks }; // Spread operator to create the body
    await postTask(mybody, dispatch);
    setTasks({
      empName: "",
      email: "",
      projectName: "",
      reason: "",
      description: ""
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="taskmanagement">
        <div className="d-flex align-items-center mb-5">
          <h3 className='me-3'>
            <img src="src/elon.jpg" alt="elon" /> Elon Native System
          </h3>
          <button className="btn btn-success" onClick={() => setIsModalOpen(true)}>Add Task</button>
        </div>

        <div className="row">
          {task.map((item) => (
            <div key={item.id} className="col-4 component px-5">
              <div className="row">
                <div className="col-6">
                  <button
                    className="circle"
                    type="button"
                    style={{ backgroundColor: '#007bff' }} // Replace with your color logic
                  >
                    {item.empName.charAt(0)}
                  </button>
                </div>
                <div className="col-6">
                  <h6 className="text-center my-3">
                    {item.empName}
                    <br />
                    <p className="text-muted">{item.email}</p>
                  </h6>
                </div>
                <div className="col mt-3">
                  <p><strong>Project Name:</strong> {item.projectName}</p>
                  <p><strong>Reason:</strong> {item.reason}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-4">
            {/* Pagination logic to be added here */}
          </ul>
        </nav>
      </div>

      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          aria-modal="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmits}>
                  <div className="row d-flex mt-3">
                    <div className="col-md-6">
                      <input
                        placeholder="Name"
                        name="empName"
                        value={tasks.empName}
                        onChange={handleChanges}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Email"
                        name="email"
                        value={tasks.email}
                        onChange={handleChanges}
                        required
                      />
                    </div>
                  </div>
                  <div className="row d-flex mt-3">
                    <div className="col-md-6">
                      <input
                        placeholder="Project Name"
                        name="projectName"
                        value={tasks.projectName}
                        onChange={handleChanges}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Reason"
                        name="reason"
                        value={tasks.reason}
                        onChange={handleChanges}
                        required
                      />
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-6">
                      <textarea
                        style={{ height: "100px" }}
                        placeholder="Description"
                        name="description"
                        value={tasks.description}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={() => setIsModalOpen(false)}>Close</button>
                    <button className="btn btn-info" type="submit">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskManagement;





































