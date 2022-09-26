import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import Home from "./home/Home";
//----------------------------------
import Login from "./home/Login";
//---------------------------------
import Payment from "./user/Payment";
import NavBar from "./navbar/NavBar";
import OwnerNavbar from "./navbar/OwnerNavbar";
import UserNavbar from "./navbar/UserNavbar";
//-------------------------------
import DoctorLogin from "./Doctor/DoctorLogin";
import DoctorRegister from "./Doctor/DoctorRegister"
import DoctorHome from "./Doctor/DoctorHome"
import DoctorNavBar from "./navbar/DoctorNavbar"
import AddDog from "./Dog/addDog"
import AddCommunity from "./Community/addCommunity"
import AddCommunityChoice from "./Community/communityChoice"
//-----------------------------
import Footer from "./navbar/Footer";
import Registration from "./home/Registration";
import AboutUs from "./home/AboutUs";
import ForgotPass from "./home/ForgotPass";

import UserHome from "./user/UserHome";


import ViewProfile from "./user/ViewProfile";


import ViewGround from "./user/ViewGrounds";
import AdminNavBar from "./navbar/AdminNavbar";
import AdminHome from "./admin/AdminHome";
import ViewUser from "./admin/ViewUser";
import ViewOwner from "./admin/ViewOwner";

import BookGround from "./user/BookGround";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/">
          <NavBar />
          <LandingPage />
          <Footer />
        </Route>

        <Route exact={true} path="/home">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact={true} path="/aboutus">
          <NavBar />
          <AboutUs />
          <Footer />
        </Route>

        <Route exact={true} path="/login">
          <NavBar />
          <Login />
          <Footer />
        </Route>

       

        <Route exact={true} path="/forgot_password">
          <NavBar />
          <ForgotPass />
          <Footer />
        </Route>
{/* //---------------------------------------------------------------------------- */}

        <Route exact={true} path="/addDog">
          <NavBar />
          <AddDog />
          <Footer />
        </Route>
        
         <Route exact={true} path="/doctorlogin">
          <NavBar />
          <DoctorLogin />
          <Footer />
        </Route>

        <Route exact={true} path="/registerUser">
          <NavBar />
          <Registration />
          <Footer />
        </Route>

        <Route exact={true} path="/registerDoctor">
          <NavBar />
          <DoctorRegister />
          <Footer />
        </Route>

        <Route exact={true} path="/doctorhome">
          <DoctorNavBar />
          <DoctorHome />
          <Footer />
        </Route>

        <Route exact={true} path="/addCommunity">
          <NavBar />
          <AddCommunity />
          <Footer />
        </Route>
        
        <Route exact={true} path="/addCommunityChoice">
          <NavBar />
          <AddCommunityChoice />
          <Footer />
        </Route>
        
{/* //----------------------------------------------------------------------------- */}
        

        

       

       
        <Route exact={true} path="/userhome">
          <UserNavbar />
          <UserHome />
          <Footer />
        </Route>

        <Route exact={true} path="/vewground">
          <UserNavbar />
          <ViewGround />
          <Footer />
        </Route>

       

        <Route exact={true} path="/bookground">
          <UserNavbar />
          <BookGround />
          <Footer />
        </Route>

        <Route exact={true} path="/adminhome">
          <AdminNavBar />
          <AdminHome />
          <Footer />
        </Route>

        <Route exact={true} path="/viewuser">
          <AdminNavBar />
          <ViewUser />
          <Footer />
        </Route>

        <Route exact={true} path="/viewowner">
          <AdminNavBar />
          <ViewOwner />
          <Footer />
        </Route>
        
        

        <Route exact={true} path="/payment">
        <UserNavbar />
          <Payment></Payment>
          <Footer />
        </Route>

        <Route exact={true} path="/viewprofile_user">
          <UserNavbar />
          <ViewProfile />
          <Footer />
        </Route>


       



      </BrowserRouter>

      
    </div>
  );
}

export default App;
