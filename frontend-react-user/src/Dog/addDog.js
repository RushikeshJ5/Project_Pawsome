import { useState } from "react";
import sweetalert from "sweetalert";
import axios from "axios";
import "../home/bg.css";

import "bootstrap/dist/js/bootstrap.min.js";
function AddDog() {
  const [Dname, setDname] = useState("");
  const [Dage, setDage] = useState("");
  const [Dbreed, setDbreed] = useState("");
  const [Dimage, setDimage] = useState("");
  

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern =  /^[6-9]\d{9}$/gi;
    if (Dname === "") {
      sweetalert("Error", "Please enter Name", "error");
      return false;
      // } else if (!isNaN(Name)) {
      //   sweetalert("Error", "Please enter valid Name", "error");
      //   return false;
    } else if (!regEx.test(Dname)) {
      sweetalert("Error", "Please enter characters and space only", "error");
      return false;
    } else if (Dage === "") {
      sweetalert("Error", "Please enter dog age", "error");
      return false;
    } else if (Dbreed === "") {
        sweetalert("Error", "Please enter breed", "error");
        return false;
        // } else if (!isNaN(Name)) {
        //   sweetalert("Error", "Please enter valid Name", "error");
        //   return false;
      }
    
    
    
    
      addNewDog();
  };

  const addNewDog = async () => {
    const newuser = {
      dname: Dname,
      dage: Dage,
      dbreed: Dbreed,
      dimage:Dimage
      
    };

    let url = "http://localhost:5000/dogs/addDog";
    await axios.post(url, newuser);
    sweetalert("success", "You have added dog successfully...", "success");
    window.location.href = "/userhome";
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
          <h2 className="fw-bold mb-5">Add Dog</h2>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter Dog name"
                        onChange={(e) => {
                          setDname(e.target.value);
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
                        placeholder="Enter Dog Age"
                        onChange={(e) => {
                          setDage(e.target.value);
                        }}
                      />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter Dog Breed"
                        onChange={(e) => {
                          setDbreed(e.target.value);
                        }}
                      />

                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  
                {/* //-- */}
                
                  <input type="file" id="myfile" name="myfile"  class="form-control" 
                        onChange={(e) => {
                          setDimage(e.target.value);
                        }} ></input>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
            

                      
            </div>
                    <a
                        class="btn mb-3 text-light navBtnLogin   fw-bold"  style={{backgroundColor: "#002746"}}
                        type="button"
                        onClick={validate}
                      >
                         Add
                      </a>

           
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

   
  );
}
export default AddDog;
