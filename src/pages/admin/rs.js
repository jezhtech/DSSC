import React from 'react'
import firebase from '../../../firebase/firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Head from 'next/head'

function RegisteredSchools() {
  const db = firebase.firestore()

const[schools]=useCollectionData(db.collection("schools"))

console.log(schools)
  return (
    <html>
    <Head>
 <meta charset="utf-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <title>Latest News</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

 </Head>
 <body>
 <nav className="navbar border-bottom border-top justify-content-center m-0 p-0">


 </nav>


 <div className="container-fluid justify-content-center">
 <div class="">
 <center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-1">Schools to be approved</h1>
        </center>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">{schools && schools.map(school => 
  {if(school.approved==false){
        return( 
          <div class="col p-2">
        <div class="card border border-1 bg-light">
       <img src={school.logo} class="card-img-top" alt="..."/>
       <div class="card-body">
        <p className="card-text fw-semibold text">School Name: {school.schoolname}</p>
        <p className="card-text fw-semibold text">Affliation Code : {school.code}</p>
        <p className="card-text fw-semibold text">Address : {school.address}</p>
        <p className="card-text fw-semibold text">City : {school.city}</p>
        <p className="card-text fw-semibold text">Pincode : {school.pincode}</p>
        <p className="card-text fw-semibold text">District : {school.district}</p>
        <p className="card-text fw-semibold text">State : {school.state}</p>
        <p className="card-text fw-semibold text">Tel no. : {school.telnum}</p>
        <p className="card-text fw-semibold text">Email ID : {school.email}</p>
        <p className="card-text fw-semibold text">Website : <a href={school.website}>{school.website}</a></p>
        <p className="card-text fw-semibold text">Principal Name: {school.pname}</p>
        <p className="card-text fw-semibold text">Whatsapp no. : {school.wcontact}</p>
        <p className="card-text fw-semibold text">Principal E-mail : {school.pmail}</p>
  


     <button className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" type="button" onClick={async()=>{
      await db.collection("schools").doc(school.schoolname).update({"approved":true})
    }}>approve</button>
     
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             ...
           </div>
         </div>
       </div>
     </div>
       </div>
     </div>
     </div>
    )}} 

      )
        }
        </div>
         </div>
         </div>




         <div className="container-fluid justify-content-center">
 <div class="">
 <center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-1">Approved Schools</h1>
        </center>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">{schools && schools.map(school => 
  {if(school.approved==true){
        return( 
          <div class="col p-2">
        <div class="card border border-1 bg-light">
       <img src={school.logo} class="card-img-top" alt="..."/>
       <div class="card-body">
        <p className="card-text fw-semibold text">School Name: {school.schoolname}</p>
        <p className="card-text fw-semibold text">Affliation Code : {school.code}</p>
        <p className="card-text fw-semibold text">Address : {school.address}</p>
        <p className="card-text fw-semibold text">City : {school.city}</p>
        <p className="card-text fw-semibold text">Pincode : {school.pincode}</p>
        <p className="card-text fw-semibold text">District : {school.district}</p>
        <p className="card-text fw-semibold text">State : {school.state}</p>
        <p className="card-text fw-semibold text">Tel no. : {school.telnum}</p>
        <p className="card-text fw-semibold text">Email ID : {school.email}</p>
        <p className="card-text fw-semibold text">Website : <a href={school.website}>{school.website}</a></p>
        <p className="card-text fw-semibold text">Principal Name: {school.pname}</p>
        <p className="card-text fw-semibold text">Whatsapp no. : {school.wcontact}</p>
        <p className="card-text fw-semibold text">Principal E-mail : {school.pmail}</p>
  

     

     <button className="btn btn-lg text-black fw-bold bg-danger border-0 py-2" type="button" onClick={async()=>{
      await db.collection("schools").doc(school.schoolname).delete()
    }}>Delete</button>
     
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             ...
           </div>
         </div>
       </div>
     </div>
       </div>
     </div>
     </div>
    )}} 

      )
        }
       </div>
         </div>
         </div>
         </body>
</html>
  )
}


export default RegisteredSchools
