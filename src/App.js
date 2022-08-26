import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Card from './components/Card';
import Paginated from './components/Paginated';


export default function App() {
  return (
    <>
    <BrowserRouter>
<Navbar/>
<Routes>
<Route path="/assigntask/img/1" element={<Card  img="https://cdn.pixabay.com/photo/2022/08/21/21/24/blackandwhite-7402145__340.jpg"/>}/>

<Route path="/assigntask/img/2" element={<Card img="https://cdn.pixabay.com/photo/2022/04/13/04/57/woman-7129432__340.jpg" />}/>
<Route path="/assigntask/img/3" element={<Card img="https://cdn.pixabay.com/photo/2021/05/05/11/02/water-lilies-6230802__340.jpg" />}/>
<Route path="/assigntask/img/4" element={<Card img="https://cdn.pixabay.com/photo/2022/07/26/12/43/mountains-7345777__340.jpg" />}/>
<Route path="/assigntask/img/5" element={<Card img="https://cdn.pixabay.com/photo/2022/03/31/15/04/observation-deck-7103210__340.jpg" />}/>

</Routes>
<div className='mt-5'>
<Paginated />
</div>
    </BrowserRouter>



    </>
  )
}
