import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom'

const Promote = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <h1>Promote</h1>
      
    </div>
  )
}

export default Promote