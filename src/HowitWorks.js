import React, { useState } from "react";
import workApi from "./Apis/WorkApi";

const HowitWorks = () => {
  const [workData, setWorkData] = useState(workApi);
  console.log(workData);
  return (
    <section>
      <div className="work-container container">
        <h1 className="main-heading1 text-center">How does it Works ?</h1>
        <div className="row">
          {workData.map((curElem) => {
              const {id , logo , title , info} = curElem;
             return (
              <>
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                  <i className={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading ">{title}</h2>
                  <div className="arange">
                  <p className="main-hero-para text-center">
                    {info}
                  </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
