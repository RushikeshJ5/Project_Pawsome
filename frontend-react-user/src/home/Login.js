import { useState } from "react";
import axios from "axios";
import "../home/bg.css";
import sweetalert from "sweetalert";
import "bootstrap/dist/js/bootstrap.min.js";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const finduser = async () => {
    const user = { email: Email, password: Password };

    //const response = await axios.post("http://localhost:8081/login", user);
    const response = await axios.post("http://localhost:5000/user/login", user);

    console.log(response.data);
    if (response.data === null || response.data === "") {
      sweetalert("error", "Invalid Credential..", "error");
    } else {
      sweetalert("success", "You have a login successfully..", "success");
      window.location.href = "/userhome";
      // localStorage.setItem("role", response.data.roleId);
      // localStorage.setItem("userid", response.data.user_id);
      // localStorage["userid"] = response.data.user_id;
      // var userid = localStorage["userid"];
      // var userid = localStorage.getItem("userid");

      // if (response.data.status === "Active") {
      //   if (response.data.roleId === 1) {
      //     window.location.href = "/adminhome";
      //   } else if (response.data.roleId === 2) {
      //     window.location.href = "/ownerhome";
      //   } else {
      //     window.location.href = "/userhome";
      //   }
      // } else {
      //   sweetalert(
      //     "Error",
      //     "You are temporarily block! Please contact admin",
      //     "error"
      //   );
      // }
    }
  };

  return (
    <section className="vh-100" style={{backgroundColor: "#001526"}}>
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-xl-10">
          <div className="card" style={{borderRadius: "1rem" , backgroundColor: "#1B1B1B"}} >
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://media.istockphoto.com/photos/smiling-young-woman-embracing-corgi-picture-id1187201594?k=20&m=1187201594&s=612x612&w=0&h=2TvRJqRz7tVuNxtU6ktTI5Zk3FnkY6OAsykKk0nr3_o="
                  alt="login form"
                  className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
  
                  <form>
  
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{color: "#001526"}}></i>
                      {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                    </div>
  
                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
  
                    { <div className="form-outline mb-4">
                       <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                    </div> }


                   
                    { <div className="form-outline mb-4">
                        
                    <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                         </div> }
                    {/* <div className="form-outline mb-4">
                      <input type="password" id="form2Example27" className="form-control form-control-lg" />
                      <label className="form-label" for="form2Example27">Password</label>
                    </div> */}
                     
                    <div className="pt-1 mb-4 col-4">
                      <button className="btn btn-dark btn-lg btn-block" type="button" style={{backgroundColor: "#002746"}} onClick={finduser}>Login</button>
                    </div>

                    <a href="/registerUser">Don't have account?Sign up here</a>
                    <h6 className="mt-4">
                        <a href="/forgot_password">Forgot Password?</a>
                      </h6>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  }
  export default Login;
  
