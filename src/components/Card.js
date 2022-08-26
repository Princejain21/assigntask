import React from 'react'

export default function Card(props) {
  return (
    <div className='container' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div className='row mt-2 justify-content-center'>
        <div className='col-8'>
          <img src={props.img} className="img-responsive" alt="..." style={{width:"100%"}}/>
        </div>
      </div>
    </div>



  )
}
