import { useState } from "react";
import sweetalert from "sweetalert";
import axios from "axios";
import "../home/bg.css";

import "bootstrap/dist/js/bootstrap.min.js";
function Registration() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Drid, setDrid] = useState("");
  // const [City, setCity] = useState("");
  // const status = "Active";
  // const [Role, setRole] = useState("");

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern =  /^[0-9]\d{9}$/gi;
    if (Fname === "") {
      sweetalert("Error", "Please enter Name", "error");
      return false;
      } else if (!isNaN(Fname)) {
        sweetalert("Error", "Please enter valid Name", "error");
        return false;
    } 
     
    
    
    else if (!regEx.test(Fname)) {
      sweetalert("Error", "Please enter characters and space only", "error");
      return false;
    } 
    
    else if (Lname === "") {
      sweetalert("Error", "Please enter Last Name", "error");
      return false;
      // } else if (!isNaN(Name)) {
      //   sweetalert("Error", "Please enter valid Name", "error");
      //   return false;
    }

    else if (!regEx.test(Lname)) {
      sweetalert("Error", "Please enter characters and space only", "error");
      return false;
    } 
    
    else if (Mobile === "") {
      sweetalert("Error", "Please enter Mobile number", "error");
      return false;
    } 
    else if (
      !pattern.test(Mobile) ||
      isNaN(Mobile) ||
      Mobile.length <= 9 ||
      Mobile.length >= 11
    ) {
      sweetalert("Error", "Please enter valid Mobile number", "error");
      return false;
    } else if (Email === "") {
      sweetalert("Error", "Please enter email", "error");
      return false;
    } else if (Email.indexOf("@") <= 0) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (
      Email.charAt(Email.length - 4) !== "." &&
      Email.charAt(Email.length - 3) !== "."
    ) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (Password === "") {
      sweetalert("Error", "Please enter password", "error");
      return false;
    } else if (Password.length <= 5 || Password.length > Password) {
      // sweetalert("Error", "Please enter Strong password", "error");
      sweetalert("Error", "Password must be atleast 6 character", "error");

      return false;
    } 
    // else if (City === "") {
    //   sweetalert("Error", "Please enter city", "error");
    //   return false;
    // } else if (!isNaN(City)) {
    //   sweetalert("Error", "Please enter valid city", "error");
    //   return false;
    // } else if (Role === "") {
    //   sweetalert("Error", "Please select role", "error");
    //   return false;
    // }
    finduser();
    addNewUser();
  };

  const addNewUser = async () => {
    const newuser = {
      fname: Fname,
      lname: Lname,
      mobile: Mobile,
      email: Email,
      password: Password,
      pincode: Pincode,
      drid: Drid,
    };

    let url = "http://localhost:5000/users/registerUser";
    await axios.post(url, newuser);
    sweetalert("success", "You have register successfully...", "success");
    window.location.href = "/login";
  };

  const finduser = async () => {
    console.log("method call");
    const user = { email: Email };
    const response = await axios.post("http://localhost:8081/checkEmail", user);
    console.log(response.data);
    if (response.data === null || response.data === "") {
      //alert("Invalid Credential");
      addNewUser();
    } else {
      sweetalert("Error", "Email already used", "error");
    }
  };

  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/Reg";
  };

  return (
   <section className="text-center">
  {/* <!-- Background image --> */}
  <div
       className="p-5 bg-image"
       style={{
              backgroundColor: "rgb(0, 21, 38)",
              height: "300px"}}
           
              
       ></div>
  {/* <!-- Background image --> */}
  <div
       className="card mx-4 mx-md-5 shadow-5-strong"
       style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)"}}
              
       >
    <div className="card-body py-5 px-md-5">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter first name"
                        onChange={(e) => {
                          setFname(e.target.value);
                        }}
                      />

                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter last name"
                        onChange={(e) => {
                          setLname(e.target.value);
                        }}
                      />
                </div>
              </div>
            </div>


            <div className="form-outline mb-4">
            <input
                        type="number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter Mobile"
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
            <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
            <input
                        type="password"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
 </div>

                <div className="form-outline mb-4">
                  
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter pincode "
                        onChange={(e) => {
                          setPincode(e.target.value);
                        }}
                      />
            </div>


            <div className="form-outline mb-4">
                  
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Enter Drid "
                    onChange={(e) => {
                      setDrid(e.target.value);
                    }}
                  />
        </div>


            

            

            {/* <!-- Checkbox --> */}
            {/* <div className="form-check d-flex justify-content-center mb-4">
              <input
                     className="form-check-input me-2"
                     type="checkbox"
                     value=""
                     id="form2Example33"
                     checked
                     />
              <label className="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div> */}

            {/* <!-- Submit button --> */}
            {/* <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={validate}
                    >
              Sign up
            </button> */}

                    <a
                        class="btn mb-3 text-light navBtnLogin   fw-bold"  style={{backgroundColor: "#002746"}}
                        type="button"
                        onClick={validate}
                      >
                         Sign Up
                      </a>

           
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

   
  );
}
export default Registration;
