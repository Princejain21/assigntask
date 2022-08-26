import React from 'react'
import {Link} from 'react-router-dom'
// sorry sir react library is getting much time to be run i'll update after it. i hope you will like it. Here i just made basic pagination to be understand.  I have also done more than half by react library you may check in Paginate.js component.
export default function Paginated() {
  return (
    <nav aria-label="Page navigation example  ">
    <ul class="pagination d-flex justify-content-center" >
      <li class="page-item"><Link class="page-link" to="/modgenic/img/1">1</Link></li>
      <li class="page-item"><Link class="page-link" to="/modgenic/img/2">2</Link></li>
      <li class="page-item"><Link class="page-link" to="/modgenic/img/3">3</Link></li>
      <li class="page-item"><Link class="page-link" to="/modgenic/img/4">4</Link></li>
      <li class="page-item"><Link class="page-link" to="/modgenic/img/5">5</Link></li>
    </ul>
  </nav>
  )
}
