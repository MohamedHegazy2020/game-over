import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <>
  
  <div class="container mt-5">
    <div className="row justify-content-center">   <div className="col-md-9">

<div className='text-center'>
        <img src={require('../../img/logo.png')} alt="404 not found" className=''  />
        <h3 className='text-capitalize'  >404 not found</h3>
        <Link className='btn btn-outline-primary text-capitalize mt-4' to={'./home'}> go back </Link>
</div>

       </div></div>
  </div>
  
  
  
  
  </>
}
