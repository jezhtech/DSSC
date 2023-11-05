import React from 'react'

export default function navbar() {
  return (
    <div>
        <nav class="navbar">
        <div class="nav-items">
          <div class="logo">
            <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" alt=""/>
          </div>
          <ul class="menu-list">
            <div class="icon cancel-bttn">
              <i class="fas fa-times"></i>
            </div>
            <li><a href="#home">Home</a></li>
            <li><a href="#reg-school">Registered School</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#members">Board Members</a></li>
            <li><a href="sign-in.html">Sign-in</a></li>
          </ul>
          <div class="icon menu-bttn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}
