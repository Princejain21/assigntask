import React, { useState } from 'react'
import imgData from '../Data/db.json'
import ReactPaginate from 'react-paginate';
import "../App.css"

export default function Withpagination() {
    const data=imgData.slice(0,7);
    const [pagenum,setpagenum]=useState(0)
const userperpage=1;
const pagevisited=pagenum*userperpage;
const showdata=data.slice(pagevisited,pagevisited+userperpage).map((elem,index)=>{
    return(
        <div className='col-7 mx-auto mt-2' key={index}>
        <img src={elem.src} alt="..." className='img-responsive m-2' style={{ width: "100%" }}/>
    </div>
    )
});

    const count=Math.ceil(data.length/userperpage)
const changePage=({selected})=>{
    setpagenum(selected)

}

  return (
    <>
     <h1 className='text-center text-danger'>Data is getting by local json created by me(user)</h1>
    <div className='row'>
{
   showdata
    
}
    </div>
    <div className='row' >
        <div className='col-3 mx-auto mt-4'>
  <ReactPaginate
  previousLabel={"previous"}
  nextLabel={"next"}
  pageCount={count}
  containerClassName={'pagination justify-content-center'}
    pageClassName={"page-item"}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    onPageChange={changePage}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    activeClassName={'active'}
    disabledClassName={'disabled'}
  
  />
        </div>
    </div>
    </>
  )
}
