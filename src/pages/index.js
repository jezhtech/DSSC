import Head from 'next/head'
import Router from 'next/router'
import firebase from '../../firebase/firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Script from 'next/script'
import style from '../styles/index.module.css'
import Link from "next/link"


function Home() {
  const[Academic_repository]=useCollectionData(firebase.firestore().collection("academic_repository"))
  const[schools]=useCollectionData(firebase.firestore().collection("schools"))
  const[latest_news]=useCollectionData(firebase.firestore().collection("latest_news").orderBy("created").limitToLast(4))
  const[upcoming_events]=useCollectionData(firebase.firestore().collection("upcoming_events").orderBy("created"))
  const[ongoing_events]=useCollectionData(firebase.firestore().collection("ongoing_events").orderBy("created"))
  latest_news&&latest_news.splice(4)
  var i =null
  if(Academic_repository!=undefined){
    i=Academic_repository[0]
   
  }  

  
   
  return (
    <div>
<div>
      <Head>
      <title>Dakshin Sahodaya School Complex</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>
      <div>
      <header>
        <div px-5>
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
                  <a className="nav-link p-3 mx-lg-2 mx-0 border-bottom border-success border-4 active" aria-current="page" href="#">Home</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/about">About Us</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/registered-schools">Registered Schools</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/gallery">Gallery</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0"></a>
                </div>

                  <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3 shadow-sm me-3" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}}>Sign Up</button>
                  <button type="button" className="btn btn-lg border border-2 border-success rounded-3 shadow-sm" onClick={()=>{Router.push("/adminlogin")}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-person-lock text-success" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
</svg>
                  </button>
                

              </div>
            </div>
          </nav>
        </div>


</header>



<section className="hero">
<div className="container-fluid text-center py-lg-0 px-lg-5 py-3">
  <div className="row align-items-center">
    <div className="col-sm-6" align="left">
      <div className="align-middle fw-bolder">
      <h1 className="display-4 fw-bolder fst-italic mb-0">Dakshin Sahodaya</h1>
      <h2 className="display-5 fst-italic fw-bold mt-0">Schools Complex</h2>
      <p className="fw-semibold fs-5 py-2" align="justify2">Dakshin Sahodaya Schools Complex emerged as a common platform for all CBSE- affiliated schools in the districts of Kanyakumari, Tirunelveli, Tenkasi and Tuticorin. At present there are 61 schools from these southern districts that are active members of Dakshin Sahodaya, its head office is positioned at Nagercoil. There are diverse array of activities carried out by Dakshin Sahodaya schools complex.</p>
      <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3  me-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>
      <div className="d-grid gap-2 col-6 mx-auto">
    </div>
      </div>
    </div>
    <div className="col-sm-6 ">
    <div className="">
      <img src="https://assets-global.website-files.com/653d4f8ca494cdf3055d9ae5/657ab60a069bbb935bebe212_college%20project.gif" className="img-fluid " width="590" height="250" alt=""/>
      </div>
    </div>
  </div>
</div>
</section>



{/* <section className="tabs py-5">
  <div className="container-fluid text-center px-lg-5 mx-lg-2">
  <div className="row align-items-center">
    <div className="col-sm-6 mb-3">
      <div className="card border-0 py-lg-5">
        <div className="card-body bg-warning border-0 rounded-4 p-4" align="left" style={{backgroundImage:`linear-gradient(90deg,#FF512F,#DD2476)`}}>
          <h4 className="card-title text-white fw-bolder">Subscription</h4>
          <p className="card-text text-white fw-semibold fs-6">To become a member you have to Subscribe to these accounts</p>
          <a href="#" className="btn bg-light border-none rounded-3 fw-bold px-4 py-2 shadow">Read more</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6 mb-3">
      <div className="card border-0 py-lg-5">
        <div className="card-body bg-warning border-0 rounded-4 p-4" align="left" style={{backgroundImage:`linear-gradient(90deg,#FF512F,#DD2476)`}}>
          <h4 className="card-title text-white fw-bolder">Registration</h4>
          <p className="card-text text-white fw-semibold fs-6">To become a user you have to register here</p>
          <a href="#" className="btn bg-light border-none rounded-3 fw-bold px-4 py-2 shadow" onClick={()=>{Router.push("/signup")}}>Register now</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</section> */}

<section className="py-3 px-lg-5">
  <h2 className="fw-bolder justify-content-centre my-4" align="center">Academic <span style={{color:"#1D976C"}}>Repository</span></h2>
  <div id="carouselExampleControls" className="carousel slide align-items-center" data-bs-ride="carousel">
   
    <div className="carousel-inner">
    <div className={`carousel-item active  ` } align="center">  
    <div className="card rounded-4 border shadow-sm my-3" style={{"width":"18rem"}}>
      <img src={i && i.image} className="card-img-top border-0" alt="" onClick={()=>{Router.push(i && i.pdf)}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{i && i.title}</h5>
      </div>
    </div>
  </div>
    
    {Academic_repository && Academic_repository.map((e)=>
    <div className={`carousel-item ` } align="center">
    <div className="card rounded-4 border shadow-sm my-3" style={{"width":"18rem"}}>
      <img src={e.image} className="card-img-top rounded-4 border-0" alt="" onClick={()=>{Router.push(e.pdf)}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{e.title}</h5>
      </div>
    </div>
  </div>
    )}
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">

      
      <span className="carousel-control-prev-icon bg-white border border-1 rounded-circle" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle text-black" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
      </span>
      <span className="visually-hidden ">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon bg-white border border-1 rounded-circle " aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle text-black" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
      </span>
      <span className="visually-hidden text-black">Next</span>
    </button>
  </div>
</section>


{/* <section className="py-5">

  <div className="container-fluid p-lg-5 text-center">
    <div className="row">
      <div className="col-sm-6">
        <h2 className="fw-bolder justify-content-centre mb-3" align="center">Ongoing <span style={{color:"#FF512F"}}>Events</span></h2>
        <div className="card shadow-lg rounded-4 me-lg-3 mb-3 border border-4">
        <div className="container text-center">
  <div className="row">
    <div className="col-sm-6">
      <img src={oe && oe.url} className="card-img-top p-0" alt="" height="300"/>
    </div>
    <div className="col-sm-6 ">
    <div className="card-body fw-bolder" align="justify">
            <h5 className="card-title fw-bolder">{oe&&oe.title}</h5>
            <p className="card-text fw-semibold">{oe&&oe.detail}</p>  
    </div>
    </div>
  </div>
</div>
        </div>
        
      </div>
      <div className="col-sm-6">
        <h2 className="fw-bolder justify-content-centre mb-3" align="center">Upcoming <span style={{color:"#FF512F"}}>Events</span></h2>
        <div className="card shadow-lg rounded-4 ms-lg-3 mb-3 border border-4">
        <div className="container text-center">
  <div className="row">
    <div className="col-sm-6">
      <img src={ue && ue.url} className="card-img-top p-0" alt="" height="300"/>
    </div>
    <div className="col-sm-6">
    <div className="card-body fw-bolder" align="justify">
            <h5 className="card-title fw-bolder">{ue&&ue.title}</h5>
            <p className="card-text fw-semibold">{ue&&ue.detail}</p>  
    </div>
    </div>
  </div>
</div>
        </div>        
      </div>
    </div>
  </div>
  
</section> */}




<section className="py-5 py-md-5">
  <h2 className="fw-bolder justify-content-centre mb-5" align="center">Registered <span style={{color:"#1D976C"}}>Schools</span></h2>
  <div className="container-fluid">
    <marquee behavior="smooth" direction="">
    <div className="row align-items-center justify-content-center">
    <div className="grid text-center">
      {schools&&schools.map((e)=>{
      if(e.approved==true){
        return(
       

           
          
          <img src={e.logo} className="mx-5" width="200" height="200"/>
    
        )

      }
    }
      )}
      </div>
    </div>
  </marquee>
  </div> 

</section>


<section>
<div className="container py-5 text-center">
    <h2 className="fw-bolder justify-content-centre mb-4" align="center">Latest <span style={{color:"#1D976C"}}>News & Events</span></h2>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  {latest_news&&latest_news.map((e)=>

    <div className="col py-2">

    <div className="card border border-1">
  <img src={e.photo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text fw-semibold">{e.detail}</p>

  </div>
</div>
    </div>
     )}


    
  </div>
</div>
</section>



{/* <section className="py-5 py-md-5">
  <h2 className="fw-bolder justify-content-centre mb-5" align="center">Latest <span style={{color:"#FF512F"}}>News</span></h2>
  <div className="card-group px-lg-5" >
    {latest_news&&latest_news.map((e)=>
      <div className="card rounded-4 shadow-lg mx-2 border border-4">
      <img src={e.photo} className="card-img-top rounded-4" width="100" height="250"/>
      <div className="card-body mx-2">
        
        <p className="card-text fw-semibold">{e.detail}</p>
      </div>
      
    </div>
    )}
    
    </div>
  
</section> */}

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
  </div>
  )
}

export default Home
