import { useState } from 'react';
import LoginForm from './componts/Loginform/LoginFrom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Custormers from './Pages/Custormers';
import Product from './Pages/Product';
import Income from './Pages/Income';
import Promote from './Pages/Promote';
import Help from './Pages/Help';
import Sidebar from './Components/Sidebar';
import TaskManagement from './Pages/TaskManagement';



function App() {
  return (
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Custormers/>}/>
          <Route path='/Product'element={<Product/>}/>
          <Route path='/Income'element={<Income/>}/>
          <Route path='/Promote'element={<Promote/>}/>
          <Route path='/Help'element={<Help/>}/>
          <Route path='/TaskManagement'element={<TaskManagement/>}/>
        </Routes>
      </Sidebar>
      </BrowserRouter>
  );
}

export default App;

