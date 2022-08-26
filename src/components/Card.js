import React from 'react'
import Paginated from './Paginated'
export default function Card(props) {
  return (
    <>
    <h1 className='text-warning text-center'>Without Pagination</h1>
      <div className='container' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <div className='row mt-2 justify-content-center'>
          <div className='col-8'>
            <img src={props.img} className="img-responsive" alt="..." style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <Paginated />
      </div>
    </>


  )
}
