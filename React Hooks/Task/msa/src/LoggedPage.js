import React from 'react'

const LoggedPage = () => {
  return (
    <div className="container ">
    <h3 className="text-center">YOU ARE WELCOME!</h3>
    <div className="container d-flex justify-content-center bg-success py-3 m-3">
    
    <input className="form-control w-75" type="text"/>
    <button className="btn w-25">Search</button>
    
    </div>
    
    </div>
  )
}

export default LoggedPage;