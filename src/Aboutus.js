import React, { useState } from "react";
import howToUse from "./Apis/HowtoUse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUse);
  return (
    
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 our-services-leftside-img">
              <img src="./images/laptop.jpg" alt="aboutusImg" />
            </div>
            <div className="col-12 col-lg-7 our-services-leftside-content our-service-list">
              <h3 className="mini-title">
                --AVAILABLE @GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">HOW TO USE THE APP</h1>
              {aboutData.map((curElem) => {
                const {id , title , info} = curElem;
                return (

                  <>
                    <div className="row our-services-info" key = {id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">
                          {info}
                        </p>
                      </div>
                    </div>
                   

                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
              </div> 
            
          </div>
        </div>
      </section>

      {/* 2nd part of Aboutus Section */}
      <section className="common-section our-services our-services-right-side">
        <div className="container mb-5">
          <div className="row">
            
            <div className="col-12 col-lg-7 our-services-right-side-content our-service-list">
              <h3 className="mini-title">
                --SUPPORT AND LANGUAGES
              </h3>
              <h1 className="main-heading">WORLD CLASS SUPPORT  <br/>IS AVAILABLE 24/7</h1>
              {aboutData.map((curElem) => {
                const {id , title , info} = curElem;
                return (

                  <>
                    <div className="row our-services-info" key = {id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">
                          {info}
                        </p>
                      </div>
                    </div>
                   

                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
              </div> 
              <div className="col-12 col-lg-5 our-services-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutusImg" />
            </div>
            
          </div>
        </div>
      </section>

    </>
  );
};

export default Aboutus;
