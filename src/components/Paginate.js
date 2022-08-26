import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

export default function Paginate() {
    const [item,setitem]=useState([]);
console.log(item)

    const fetchComments= async (currentPage)=>{
        const res=await fetch(
            `http://localhost:3000/img/?_page=${currentPage}`
        )
        const data=await res.json();
        console.log(data);
        return data;
        
    }
    
    const hanglepagechange=async (item)=>{
        let currentPage=item.selected+1;
       const val=await  fetchComments(currentPage);
       setitem(val)
    }
  return (
    <>
    <ReactPaginate 
    nextLabel={'next'}
    previousLabel={"previous"}
    pageCount={2}
    onPageChange={hanglepagechange}
    containerClassName={'pagination justify-content-center'}
    pageClassName={"page-item"}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    activeClassName={'active'}
    />
    </>
  )
}
