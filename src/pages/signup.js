import React, { useState } from 'react'
import firebase from '../../firebase/firebase'
import Head from 'next/head'
import { redirect } from 'next/navigation'
function Sign() {
  const [school, setschool] = useState()
  const [City, setCity] = useState("")
  const [logo, setlogo] = useState("")
  const [payment, setpayment] = useState()
  const [email, setemail] = useState()
  const [code, setcode] = useState()
  const [contact, setcontact] = useState()
  const [address, setaddress] = useState()
  const [District, setDistrict] = useState()
  const [State, setState] = useState()
  const [Tnumber, setTnumber] = useState()
  const [pmail, setpmail] = useState()
  const [wcontact, setwcontact] = useState()
  const [Website, setWebsite] = useState()
  const [pincode, setpincode] = useState()
  const [pname, setpname] = useState()
  const db =firebase.firestore()
    
  const sign=async()=>{
    const storage =firebase.storage()
    await storage.ref("logo").child(school).child(logo.name).put(logo)
    await storage.ref("payment").child(school).child(payment.name).put(payment)
    const loglink =  await storage.ref("logo").child(school).child(logo.name).getDownloadURL()
    const paylink = await storage.ref("payment").child(school).child(payment.name).getDownloadURL()
    await db.collection("schools").doc(school).set(
        {
            "adress" : address,
            "approved":false,
            "logo":loglink,
            "payment": paylink,
            "city":City,
            "schoolname":school,
            "email":email,
            "code":code,
            "pmail":pmail,
            "telnum":Tnumber,
            "wcontact":wcontact,
            "district":District,
            "state":State,
            "website":Website,
            "pincode":pincode,
            "pname":pname



        }
    )
    setaddress("")
    setcode("")
    setcontact("")
    setemail("")
    setlogo("")
    setpayment("")
    setschool("")
    redirect('/')
}

  return (
   
    <html>
    <Head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>DSSC - School Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>

</Head>
<body className="d-none d-lg-block"> 
<header>
        <div px-5>
          <nav className="navbar navbar-expand-lg bg-body-tertiary px-lg-5 px-0 border border-bottom ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
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
                  <a className="nav-link p-3 mx-lg-2 mx-0 active" aria-current="page" href="/">Home</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/registered-schools">Registered Schools</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0" href="/gallery">Gallery</a>
                  <a className="nav-link p-3 mx-lg-2 mx-0"></a>
                </div>
                <button type="button" className="btn btn-success btn-lg border-0 rounded-4 fw-bold px-5 py-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>

              </div>
            </div>
          </nav>
        </div>


</header>

<center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-1">Registration Form</h1>
        </center>

        <div className="container justify-content-center py-5" >

<form className="row g-3">
<div className="col-md-9">
  <div className="form-floating">
  <input type="text" className="form-control text-dark " placeholder="Password" value={school} onChange={(e)=>{setschool(e.target.value)}}/>
  <label className="text-secondary fw-semibold">School Name</label>
</div>
  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input className="form-control text-dark" type="number" required placeholder='Affiliation Code' value={code} onChange={(e)=>{setcode(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Affiliation Code</label>
</div>
  </div>
  <div className="col-md-12">
  <div className="form-floating">
  <textarea className="form-control text-dark" required type="text" placeholder="Address" value={address} onChange={(e)=>{setaddress(e.target.value)}} style={{height: "100px"}}></textarea>
  <label className="text-secondary fw-semibold">Address</label>
  </div>
  </div>





  <div className="col-md-3">
  <div className="form-floating">
  <input type="text" className="form-control text-dark" placeholder="City" required  onChange={(e)=>{setCity(e.target.value)}} value={City} />
  <label className="text-secondary fw-semibold">City</label>
</div>

  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input type="number" className="form-control text-dark" placeholder="Pin Code" required value={pincode} onChange={(e)=>{setpincode(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Pin Code</label>
</div>

  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input type="text" className="form-control text-dark" required placeholder="District" value={District} onChange={(e)=>{setDistrict(e.target.value)}}/>
  <label className="text-secondary fw-semibold">District</label>
</div>
  </div>
  <div className="col-md-3">
  <div className="form-floating">
  <input type="text" className="form-control text-dark" placeholder="State" value={State} onChange={(e)=>{setState(e.target.value)}}/>
  <label className="text-secondary fw-semibold">State</label>
</div>
  </div>


  <div className="col-md-4">
  <div className="form-floating">
  <input type="tel" className="form-control text-dark" placeholder="Telephone Number" required value={Tnumber} onChange={(e)=>{setTnumber(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Telephone Number</label>
</div>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
  <div className="form-floating">
  <input type="email" className="form-control text-dark" placeholder="Email ID" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Email ID</label>
</div>
  </div>
  <div className="col-md-4">
  <div className="form-floating">
  <input type="text" className="form-control text-dark" placeholder="website" value={Website} onChange={(e)=>{setWebsite(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Website</label>
</div>
  </div>

  
  <div className="col-md-6">
  <div className="">
  <label for="formFile" className="form-label text-dark fw-bold px-1">Upload the School's logo</label>

  <input className="form-control text-dark fw-semibold" type="file" id="formFile" onChange={(e)=>{setlogo(e.target.files[0])}}/>
  <p className="fw-semibold text-small mt-2">
    <span className='text-danger fw-bolder '>*</span>The logo should have a white background<br/>
    <span className='text-danger fw-bolder '>*</span>The logo should be of the size 500x500</p>
</div>
</div>

<div className="col-md-6">
<div className="">
  <label for="formFile" className="form-label text-dark fw-bold px-1">Upload the Payment photo</label>
  <input className="form-control text-dark fw-semibold" type="file" id="formFile"  onChange={(e)=>{setpayment(e.target.files[0])}}/>
</div>
</div>
<hr/>

  <div className="col-md-4">
  <div className="form-floating">
  <input type="text" className="form-control text-dark" placeholder="Principl Name" required value={pname} onChange={(e)=>{setpname(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Principl Name</label>
</div>

  </div>
  <div className="col-md-4">
  <div className="form-floating">
  <input type="tel" className="form-control text-dark" required placeholder="WhatsApp Number" value={wcontact} onChange={(e)=>{setwcontact(e.target.value)}}/>
  <label className="text-secondary fw-semibold">WhatsApp Number</label>
</div>
  </div>
  <div className="col-md-4">
  <div className="form-floating">
  <input type="email" className="form-control text-dark" placeholder="Principal Email ID" required value={pmail} onChange={(e)=>{setpmail(e.target.value)}}/>
  <label className="text-secondary fw-semibold">Principal Email ID</label>
</div>
  </div>
<div className="d-grid py-3">
  <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={sign}>submit</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header border border-0">
        <a type="button" href="/" className="btn btn-close border rounded-circle" data-bs-dismiss="modal" aria-label="Close"></a>
      </div>
      <div className="modal-body text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-check2-circle text-success" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>
<h1 className="display-5 fw-semibold">Successfully Registered !</h1>

      </div>
    </div>
  </div>
</div>
</div>

</form>
</div>








<footer className="navbar navbar-expand-lg bg-light px-lg-5 px-2 text-dark border border-top-1">
    <div className="container-fluid">
      <span className="navbar-text me-auto  px-2">
        <span className="fw-bold">Copyright © 2023 DSSC </span><div className="vr text-black mx-2"></div>
        <small className="fw-normal"><span className="fw-bold">Designed & Developed by</span> <a target="new" href="https://jezhtechnologies.com" className="fw-bolder text-decoration-none text-dark">Jezh Technologies Pvt Ltd.</a></small>

      </span>

    </div>
  </footer>  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>

</body>
</html>
  )
}

export default Sign
