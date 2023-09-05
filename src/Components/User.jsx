import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const User = () => {
    const params = useParams();
    // params.id in which "id" will be the same as defined in the App.jsx in the routers section "/:id"
    const navigate = useNavigate();
  return (
    <div className='user'>
      <button className='button' onClick={()=>navigate("about")}>USER</button>
    </div>
  )
}

export default User
