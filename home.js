import React from 'react'
import { Link } from 'react-router-dom'
function home() {
  return (
    <div>
                    {/*---navbar---*/}
          <div className='navpage'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
               
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li class="nav-item">
              <Link  className="nav-link" to="/search" >Search</Link>
              </li>
              <li class="nav-item">
              <Link className='nav-link' to='/mybook'>My Book List</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to='/libarybooklist'>Libary Book List</Link>
            
          </li>
          <li className='nav-itm'>
          
          <Link className='nav-link' to='/watinglist'>Wating List</Link>
          </li>
          <li className='nav-item '>
          
            <Link className='nav-link disabled' to='/notifaction'>Notifaction</Link>
          </li>
          <li className='nav-item'>
    
            <Link className='nav-link' to='/request'>Request</Link>
          </li>
          <li className='nav-item'>
            
            <Link className='nav-link' to='/mydata'>My Data</Link>
          </li>
          <li className='nav-item'>
            
            <Link className='nav-link' to='/missing'>Missing</Link>
          </li>
        </ul>
        <button className='btn btn-primary'>Logout</button>
        
  </div>
</nav>
   </div>  
   
   <div>
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="ima/img1.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="ima/img1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="ima/img1.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      <p>Click here to  <Link to="/register">Register</Link> </p>
   </div>
               
               </div>
  )
}

export default home