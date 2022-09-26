


import React from "react";
import "./NavBar.css";
import letsplay from "../images/pawsomelogo2.png";

const UserNavBar = () => {
  const logOut = () => {
    window.location.href = "/";
    // localStorage.clear();
  };

  return (
    <div className="m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#072A46"}}>
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/userhome">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/addDog">
                Add Dog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/addCommunityChoice">
                Community
              </a>
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbookings_user"
              >
                My Bookings
              </a>
            </li> */}
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/ViewProfile_user"
              >
                View Profile
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/"
              >
                <button
              class="btn navbtn navBtnReg"
              
              href="/"
            >
              Log Out
            </button>
               
              </a>
            </li>

           
            {/* <li class="nav-item active">
              <button
                class="btn navbtn navBtnReg"
                onclick={logOut}
                onclick={redirectlogin}
                href="/"
              >
                Log Out
              </button>{" "}
            </li> */}
          </ul>

          {/* <form class="d-flex">
            <button
               class=""  style={{backgroundColor: "#072A46"}}
              type="submit"
              onClick={logOut} 
            >
              Log Out
            </button>
          </form> */}
        </div>
      </nav>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-outline-success navBtnReg"
                type="button"
                // onClick={redirectreg}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default UserNavBar;

