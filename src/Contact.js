import React, { useState } from "react";

const Contact = () => {
  const [userData , setUserData] = useState({
    firstName : "",
  lastName : "",
  phone : "",
  email : "",
  address : "",
  message : "testing",

  });
  let name , value;
  const postUserData = (event) => {
    name = event.target.name;

    value = event.target.value;

    setUserData({...userData , [name]:value})
    
  }
  const submitData = async(event) => {
    event.preventDefault();
    const {firstName,lastName,phone , email , address , message} = userData;

    if(firstName && lastName && phone && email && address && message){

    
       
  
    const result = fetch('https://reactfireweb-default-rtdb.firebaseio.com/userDataRecords.json',{
    method : "POST",
    Headers : {
      "Content-Type"  :"application/json",
    },
    body:JSON.stringify({
      firstName ,
  lastName ,
  phone, 
  email, 
  address,
  message ,

    })
  }
    );
    if (result){
      setUserData({
        firstName : "",
  lastName : "",
  phone : "",
  email : "",
  address : "",
  message : "testing",
      })
      alert("Data Stored")
    }
    else{
      alert("Please fill the data");
    }
  }
  else{
    alert("Please fill the data");
  }
  };

  

  return (
    <>
      <div className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    Contact With Our <br /> Sales Team
                  </h1>
                  <p className="sub-heading main-hero-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est similique sunt error cum
                  </p>
                  <figure>
                    <img
                      src="./images/laptop.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="post">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          placeholder="First Name"
                          className="form-control"
                          value = {userData.firstName}
                          onChange = {postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          placeholder="Last Name"
                          className="form-control"
                          value = {userData.lastName}
                          onChange = {postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact">
                        <input
                          type="tel"
                          name="phone"
                          id=""
                          placeholder="Phone Number"
                          className="form-control"
                          value = {userData.phone}
                          onChange = {postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact">
                        <input
                          type="email"
                          name="email"
                          id=""
                          placeholder="Email"
                          className="form-control"
                          value = {userData.email}
                          onChange = {postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact">
                        <input
                          type="text"
                          placeholder="Add Address..."
                          className="form-control"
                          name="address"
                          id=""
                          value = {userData.address}
                          onChange = {postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact">
                        <input
                          type="text"
                          placeholder="Add Your Message.."
                          className="form-control"
                          name="message"
                          id=""
                          value = {userData.message}
                          onChange = {postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        
                      />
                      <label class="form-check-label" className="main-hero-para" for="flexCheckDefault">
                        Kindly read above notes and check it
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100" onClick = {submitData} >Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
