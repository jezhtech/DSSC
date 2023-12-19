import React from 'react'
import Link from 'next/link'
import firebase from '../../../firebase/firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Head from 'next/head'

function RegisteredSchools() {
  const db = firebase.firestore()

const[schools]=useCollectionData(db.collection("schools"))

  return (
    <div>
    <Head>
 <meta charset="utf-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <title>Latest News</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

 </Head>
 <div>
 <nav className="navbar border-bottom border-top justify-content-center m-0 p-0">


 </nav>


 <div className="container-fluid justify-content-center">
 <div class="">
 <center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-2">Schools to be approved</h1>
        </center>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">{schools && schools.map(school => 
  {if(school.approved==false){
        return( 
          <div class="col p-2">
        <div class="card border border-2">
       <img src={school.logo} class="card-img-top mx-auto px-auto" style={{width:260,height:260}} alt="logo"/>
       <div class="card-body" style={{height:950}}>
        <p className="card-text fw-semibold text"><b className="text-success">School Name:</b> <br></br> {school.schoolname}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Affliation Code :</b> <br></br> {school.code}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Address :</b> <br></br> {school.address}</p>
        <p className="card-text fw-semibold text"><b className="text-success">City :</b> <br></br> {school.city}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Pincode :</b> <br></br> {school.pincode}</p>
        <p className="card-text fw-semibold text"><b className="text-success">District :</b> <br></br> {school.district}</p>
        <p className="card-text fw-semibold text"><b className="text-success">State :</b> <br></br> {school.state}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Tel no. :</b> <br></br> {school.telnum}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Email ID :</b> <br></br> {school.email}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Website :</b> <br></br> <a target="_blank" href="{school.website}">{school.website}</a></p>
        <p className="card-text fw-semibold text"><b className="text-success">Principal Name:</b> <br></br> {school.pname}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Whatsapp no. :</b> <br></br> {school.wcontact}</p>
        <p className="card-text fw-semibold text"><b className="text-success">Principal E-mail :</b> <br></br> {school.pmail}</p>
  


     <button className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" type="button" onClick={async()=>{
      await db.collection("schools").doc(school.schoolname).update({"approved":true})
    }}>Approve</button>
     
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
        <h1 className="fw-bolder bg-light px-2 py-3">Approved Schools</h1>
        </center>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">{schools && schools.map(school => 
  {if(school.approved==true){
        return( 
          <div class="col p-2">
        <div class="card border border-2" >
       <img src={school.logo} class="card-img-top mx-auto px-auto" style={{width:260,height:260}} alt="logo"/>
       <div class="card-body" style={{height:950}}>
        <p className="card-text fw-semibold text"><b className="text-success">School Name:</b> <br></br> <b className="text-black">{school.schoolname}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Affliation Code :</b> <br></br> <b className="text-black">{school.code}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Address :</b> <br></br> <b className="text-black">{school.address}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">City :</b> <br></br> <b className="text-black">{school.city}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Pincode :</b> <br></br> <b className="text-black">{school.pincode}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">District :</b> <br></br> <b className="text-black">{school.district}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">State :</b> <br></br> <b className="text-black">{school.state}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Tel no. :</b> <br></br> <b className="text-black">{school.telnum}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Email ID :</b> <br></br> <b className="text-black">{school.email}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Website :</b> <br></br> <Link target="_blank" href="{school.website}">{school.website}</Link></p>
        <p className="card-text fw-semibold text"><b className="text-success">Principal Name:</b> <br></br> <b className="text-black">{school.pname}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Whatsapp no. :</b> <br></br> <b className="text-black">{school.wcontact}</b></p>
        <p className="card-text fw-semibold text"><b className="text-success">Principal E-mail :</b> <br></br> <b className="text-black">{school.pmail}</b></p>
  

     

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
         </div>
</div>
  )
}


export default RegisteredSchools
