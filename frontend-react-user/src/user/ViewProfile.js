import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";


function ViewProfile() {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    // if (
    //   localStorage.getItem("role") === "null" ||
    //   localStorage.getItem("role") != "3"
    // ) {
    //   window.location.href = "/login";
    // }
    getUserList();
  }, []);

  const getUserList = async () => {
    const userid = { userId: localStorage.getItem("userid") };
  //   let userid = localStorage.getItem("userid");
  //   console.log(userid);
    /* const response = await axios.get(
      "http://localhost:8081/getUserByRoleId",
      userid
    );
     setUserList(response.data);
    console.log(response.data);
    */

    axios.get(`http://localhost:5000/user/id/${userid}`).then(
      (response) => {
        console.log(response.data);
        setUserList([{ ...response.data }]);
      },
      (error) => {
        console.log(error.data);
        //toast.error("Error deleting project.. Try Again");
      }
    );
  };
  ////style={{ backgroundColor: "#7e41a5" }}
  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">My Profile</h1>
        <table className="table hover">
          <thead>
            <tr className></tr>
          </thead>
          <tbody>
            {UserList.map((user) => {
              return (
                <>
                  <tr>
                    <td>Name :</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>Doctor name :</td>
                    <td>{user.doctor.fname}</td>
                  </tr>
                  {/* <tr>
                    <td>Email :</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>City :</td>
                    <td>{user.city}</td>
                  </tr>
                  <tr>
                    <td>Role : USER</td>
                  </tr> */}
                </>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewProfile;
