import React from "react";
import "./NavBar.css";
import letsplay from "../images/pawsomelogo2.png";

const NavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectdoclogin = () => {
    window.location.href = "/doctorlogin";
  };

  const redirectreg = () => {
    window.location.href = "/register";
  };

  return (
    <div class="navbarrr">
       <nav class="navbar navbar-expand-md  navbar-dark" >
      {/* <!-- Brand --> */}
     {/* <a class="navbar-brand" href="#">Players Spot</a> */}
     <div class="logo1">
      <img class="logo1" src={letsplay}></img>
      </div>


  {/* <!-- Toggler/collapsibe Button --> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  {/* <!-- Navbar links --> */}
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">

    <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\home">Home <span class="sr-only">(current)</span></a>
      </li> 

      

      <li class="nav-item active">
        <a class="nav-link" onclick={redirectlogin} href="\login">User Login<span class="sr-only">(current)</span></a>
      </li>


      <li class="nav-item active">
        <a class="nav-link" onclick={redirectdoclogin} href="\doctorlogin">Doctor Login <span class="sr-only">(current)</span></a>
      </li>

     

    </ul>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
