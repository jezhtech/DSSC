import React from 'react'
import Router from 'next/router'
import firebase from '../../firebase/firebase'
import Head from 'next/head'
import Script from 'next/script'

import Link from 'next/link'
import {useCollectionData} from 'react-firebase-hooks/firestore'

export default function registeredschools() {
  const[latest_news]=useCollectionData(firebase.firestore().collection("latest_news").orderBy("created").limitToLast(4))

  const db = firebase.firestore()

const[schools]=useCollectionData(db.collection("schools"))

  return (
    <div>
    <Head>
 <meta charset="utf-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <title>DSSC | Registered Schools</title>
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
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/about">About Us</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0 border-bottom border-success border-4 active" aria-current="page"href="/registered-schools">Registered Schools</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/gallery">Gallery</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0"></a>
                </div>
                <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>

              </div>
            </div>
          </nav>






         <div className="container-fluid justify-content-center">
 <div className="">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">{schools && schools.map(school => 
 {
        return( 
          <div className="col p-2 justify-content-center">
        <div className="card border border-2 rounded-3 ">
        
       <img src={school.logo} className="card-img-top mx-auto px-auto" style={{width:260,height:260}} alt="logo"/>
       
       <div className="card-body" style={{height:225}}>
        <p className="card-text fw-semibold text"><b className="text-success">School Name:</b><br></br> <b className="text-black">{school.schoolname}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Affliation Code :</b> <br></br><b className="text-black">{school.code}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Email ID :</b> <br></br><b className="text-black"> {school.email}</b></p>
  

     
     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
             ...
           </div>
         </div>
       </div>
     </div>
       </div>
     </div>
     </div>
    )} 

      )
        }
       </div>
         </div>
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
