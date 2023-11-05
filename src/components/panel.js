import React, { useState } from 'react'
import Head from 'next/head'


function Panel(){
  const[iframe,setiframe]=useState("/admin/h")
  return (
<html>
<Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>

    <title>DSSC Admin Panel</title>
</Head>
    



<body>

  <div className="container-fluid d-flex flex-row align-items-center shadow-none border border-bottom">


  <button class="btn d-flex flex-row align-items-center shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <div className="border rounded-circle p-3 shadow-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </div>
 <p className="h3 fw-bolder my-2 mx-3">Menu</p>
  </button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
    <button type="button" class="btn-close p-3 border rounded-circle m-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <nav className="nav flex-column h3 text-dark text-decoration-none">
                <a className="nav-link fw-semi bold p-2 h3 text-black" href="" onClick={()=>{
                setiframe("/admin/h")
                }}>Home <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></a>
                <a className="nav-link fw-semi bold p-2 h3 text-black" href="#"onClick={()=>{
                setiframe("/admin/rs")
                }}>Registered Schools <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></a>
                <a className="nav-link fw-semi bold p-2 h3 text-black" href="#"onClick={()=>{
                setiframe("/admin/ar")
                }}>Academic Repository <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></a>
        
                <a className="nav-link fw-semi bold p-2 h3 text-black" href="#"onClick={()=>{
                setiframe("/admin/ln")
                }}>Latest News <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></a>
                <hr className="border border-white m-0" />
                <a className="nav-link fw-semi bold p-2 h3 text-black" href="#"onClick={()=>{
                setiframe("/admin/g")
                }}>Gallery <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg></a>
              </nav>
  </div>
</div>
<div class="vr"></div>

  <a class="navbar-brand mx-3" href="#">
              <div class="d-flex flex-row align-items-center">
                <div class="p-2">
                  <img src="/images/dakshilogo.jpg" alt="Dakshin Sahodaya" width="75" height="60" className="d-inline-block img-fluid rounded-1 align-text-top"/>
                </div>
                <div className="p-2">
                <h2 className="fw-bolder">Dakshin<br/>Sahodaya</h2>
                </div>
              </div>
              </a>
  </div>
  <section>
    <div className="container-fluid ratio ratio-16x9">
      <iframe class="allowfullscreen" src={iframe}></iframe>
    </div>
  </section>
  





    {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 border border-dark" align="left">
          <nav className="navbar">
              <div className="container-fluid pt-4 pb-3" >
                <h1 className="navbar-brand text-mb-0 h1 text-white fw-bolder position-absolute top-50 start-50 translate-middle"><b>Menu</b></h1>
              </div>
            </nav>
            <nav className="nav flex-column">
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#" onClick={()=>{
                setiframe("/admin/h")
                }}>HOME</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/rs")
                }}>REGISTERED SCHOOLS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ar")
                }}>ACADEMIC REPOSITORY</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ue")
                }}>UPCOMING EVENTS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/oe")
                }}>ONGOING EVENTS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ln")
                }}>LATEST NEWS</a>
                <hr className="border border-white m-0" />
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mt-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/g")
                }}>GALLERY</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mt-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/bm")
                }}>BOARD MEMBERS</a>
              </nav>
          </div>
          <div className="col-sm-10 mx-0 px-0 border border-dark">
            <nav className="navbar border-bottom">
              <div className="container-fluid" >
              <a class="navbar-brand" href="#">
              <div class="d-flex flex-row align-items-center">
                <div class="p-2">
                  <img src="/images/dakshilogo.jpg" alt="Dakshin Sahodaya" width="75" height="60" className="d-inline-block img-fluid rounded-1 align-text-top"/>
                </div>
                <div className="p-2">
                <h2 className="fw-bolder">Dakshin<br/>Sahodaya</h2>
                </div>
              </div>
              </a>
              </div>
            </nav>
            <div className="container-fluid ratio ratio-16x9">
              <iframe class="allowfullscreen" src={iframe}></iframe>
            </div>
          </div>
        </div>
    </div> 
    <div class="container-fluid bg-black">
  <footer class="d-flex flex-wrap justify-content-between align-items-center bg-black py-2">
    <p class="col-md-5 mb-0 fw-bold text-secondary">© 2022 Dakshin Sahodaya</p>

    <a href="/" class="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="50" height="50" alt="..."/>
    </a>
    
      <ul class="nav col-md-5 justify-content-end">
        <li class="nav-item"><a href="https://jeshtechnology.com/" class="nav-link px-2 fw-semibold text-secondary">Designed And Developed By
<b> Jesh Technology Pvt. Ltd.</b></a></li>
      </ul>
    </footer>
</div>        */}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
</body>
</html>
  )
}

export default Panel
