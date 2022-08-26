import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='nav bg-dark text-white  p-3'>
        <ul className='nav-link text-white'>
        <li><Link className='text-white'  to='/assigntask/'>Image1</Link></li>
        <li><Link className='text-white' to='/assigntask/img/2'>Image2</Link></li>
        <li><Link className='text-white' to='/assigntask/img/3'>Image3</Link></li>
        <li><Link className='text-white' to='/assigntask/img/4'>Image4</Link></li>
        <li><Link className='text-white' to='/assigntask/img/5'>Image5</Link></li>
        </ul>
    </nav>
  )
}
