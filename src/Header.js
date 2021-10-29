import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <sectio className="container main-hero-container">
          <div className="row container">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column order-lg-first order-last align-items-start">
              <h1 className="display-6">
                Online Payment Mode
                <br />
                Easy For Now
              </h1>
              <p className="main-hero-para text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium unde voluptatum vel laborum facere, laudantium
                aperiam aspernatur aut, velit accusamus ipsum ipsa, enim
                consectetur reiciendis quis possimus assumenda? Debitis, fuga.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                  <input type="text" className="rounded-pill w-75 me-3 form-control-text p-2"  placeholder="enter your email"/>
                  <div className="input-group-button">Get it now</div>
              </div>
              
            </div>
            <div className="col-12 col-lg-6 header-right-side order-md-first ordre-sm-first d-flex justify-content-center flex-column align-items-start main-hero-section-img">
                  <img src="./images/library.png" className="img-fluid" alt=""  />
                  <img src="./images/banner2.jpg" alt="" className="img-fluid main-hero-img2"  />
              </div>
          </div>
        </sectio>
      </header>
    </>
  );
};

export default Header;
