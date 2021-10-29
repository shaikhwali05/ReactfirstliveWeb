import React, { useState } from "react";
import ServiceApi from "./Apis/ServiceApi";

const Service = () => {
    const [serviceData , setServicedata] = useState(ServiceApi)
   return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            HOW TO SEND MONEY
          </h1>
        </div>
        <div className="row">
            {
                serviceData.map((curElem) =>{
                    const {id , title , logo , info} = curElem;
                    return( <>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv service-div" key = {id}>
            <i className={`fontawesome-style ${logo}`}></i>
            <h2 className="sub-heading ">{title}</h2>
            <p className= "sub-heading main-hero-para">
              {info}
            </p>
          </div>
                    </>
                    )
                })
            }
          cd
        </div>
      </section>
    </>
  );
};

export default Service;
