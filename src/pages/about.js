import React from 'react'
import Router from 'next/router'
import firebase from '../../firebase/firebase'
import Head from 'next/head'
import Script from 'next/script'

function about() {
  return (
    <div>
            <Head>
 <meta charset="utf-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <title>DSSC | About Us</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

 </Head>
 <div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary px-lg-5 px-0 border border-bottom ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
              <div className="d-flex flex-row align-items-center">
                <div className="">
                  <img src="/images/dakshilogo.jpg" alt="Dakshin Sahodaya" width="75" height="60" className="d-inline-block img-fluid rounded-1 align-text-top"/>
                </div>
                <div className="p-2">
                <h2 className="fw-bolder">Dakshin<br/>Sahodaya</h2>
                </div>
              </div>
              </a>
              <button className="navbar-toggler border-1  rounded-circle p-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav fw-bolder h4 mx-auto">
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/">Home</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0 border-bottom border-success border-4 active" aria-current="page" href="#">About Us</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/registered-schools">Registered Schools</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/gallery">Gallery</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0"></a>
                </div>
                <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>

              </div>
            </div>
          </nav>






         <div className="container-fluid justify-content-center">
         <section> 
<div className="container text-center justify-content-centre">
    <h2 className="fw-bolder justify-content-centre my-4" align="center">Board <span style={{color:"#1D976C"}}>Members</span></h2>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-centre">
    <div className="col py-2">
    <div className="card">
  <img src="https://assets-global.website-files.com/653d4f8ca494cdf3055d9ae5/653fb3ab1f3495ab166e9388_WhatsApp%20Image%202023-10-30%20at%2013.40.52_54643543.jpg" className="card-img-top" alt="..."/>
  <div className="card-body bg-light">
    <h5 className="card-title fw-bolder">MR.BINUMON V.R</h5>
    <h6 className="card-title fw-bolder" style={{color:"#1D976C"}}>PRESIDENT OF DSSC</h6>

   

  </div>
</div>
    </div>
    <div className="col py-2">
    <div className="card">
  <img src="https://assets-global.website-files.com/653d4f8ca494cdf3055d9ae5/653fb3ab4b25921b624efa9b_WhatsApp%20Image%202023-10-30%20at%2013.40.52_8631ecfe.jpg" className="card-img-top" alt="..."/>
  <div className="card-body bg-light">
    <h5 className="card-title fw-bolder">MRS.MANJU RAJESH</h5>
    <h6 className="card-title fw-bolder" style={{color:"#1D976C"}}>TREASURER OF DSSC</h6>

    

  </div>
</div>
    </div>
    <div className="col py-2">
    <div className="card">
  <img src="https://assets-global.website-files.com/653d4f8ca494cdf3055d9ae5/653fb3abfdc3e36599194fba_WhatsApp%20Image%202023-10-30%20at%2013.40.52_2714fc51.jpg" className="card-img-top" alt="..."/>
  <div className="card-body bg-light">
    <h5 className="card-title fw-bolder">PROF. ZOHARA HUSSAIN</h5>
    <h6 className="card-title fw-bolder" style={{color:"#1D976C"}}>SECRETARY OF DSSC</h6>


  </div>
</div>
    </div>    
  </div>
</div>
</section>
         </div>


         <footer className="navbar navbar-expand-lg bg-light px-lg-5 px-2 text-dark border border-top-1">
    <div className="container-fluid">
      <span className="navbar-text me-auto  px-2">
        <span className="fw-bold">Copyright © 2023 DSSC </span><div className="vr text-black mx-2"></div>
        <small className="fw-normal"><span className="fw-bold">Designed & Developed by</span> <a target="new" href="https://jezhtechnologies.com" className="fw-bolder text-decoration-none text-dark">Jezh Technologies Pvt Ltd.</a></small>

      </span>

    </div>
  </footer>  
         <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>

         </div>
    </div>
  )
}

export default about