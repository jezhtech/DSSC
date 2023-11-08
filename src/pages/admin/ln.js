import React, { useState } from 'react'
import firebase from '../../../firebase/firebase'
import Head from 'next/head'

function LatestNews() {
  const [img, setimg] = useState()
  const [detail, setdetail] = useState()
  const post=async()=>{
   const str = firebase.storage()
   const db = firebase.firestore()
    await str.ref("latest_news").child(img.name).put(img)
    await db.collection("latest_news").doc().set({
    "photo":await str.ref("latest_news").child(img.name).getDownloadURL(),
    "detail":detail,
    "created": firebase.firestore.FieldValue.serverTimestamp()
   })
  }
  return (

    <html>
    <Head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Latest News</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

</Head>
<body>    
<nav className="navbar border-bottom border-top">
<div className="container-fluid justify-content-center px-0">
  <h1 className="navbar-brand my-0 h1 fw-bolder"><b>LATEST NEWS</b></h1>      
</div>
</nav>
<div className="container-fluid justify-content-center" style={{width:'25rem'}}>
<form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
  <div className="form-floating">
    <textarea type="text" className="form-control bg-light" rows={100} col={20} placeholder="Name" onChange={(e)=>{setdetail(e.target.value)}}/>
    <label className="text-secondary fw-bold">Details of the news</label>
  </div>
  <div className="my-2">
 <label className="form-label fw-bold">Image for the News</label>
 <input className="form-control" type="file" accept=".png, .jpg, .jpeg" id="formFile" onChange={(e)=>{setimg(e.target.files[0])}}/>
</div>

<div className="d-grid mt-3">
<button type="button" className="btn btn-lg fw-bold border-0 text-white py-2" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={post}>Post</button>
</div>
</form>
</div>

</body>
</html>
  )
}

export default LatestNews