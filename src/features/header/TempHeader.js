import React, { useContext, useEffect } from 'react';
import BasicModal from '../../components/Modals';
import "./header.css";
import { AppContext } from '../../context/state';


function TempHeader() {
    const {login} = useContext(AppContext);
    useEffect(() => {
   console.log(login)
    }, [])
  return <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{height:'80px'}}>
  <p className="navbar-brand d-flex align-items-center px-4 px-lg-5" >
      <h2 className="m-0 text-info"><i className="fa fa-book m-auto"></i>eLEARNING</h2>
  </p>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
          <p className="nav-item nav-link m-auto p-4" style={{fontSize:'20px'}}>Home</p>
          {/* <p className="nav-item nav-link m-auto p-4"  style={{fontSize:'20px'}}>About</p>
          <p className="nav-item nav-link m-auto p-4"  style={{fontSize:'20px'}}>Courses</p> */}
          <div className="nav-item dropdown">
              <p className="nav-link dropdown-toggle m-auto p-4" data-bs-toggle="dropdown"  style={{fontSize:'20px'}}>Pages</p>
              <div className="dropdown-menu fade-down m-0">
                  <p className="dropdown-item">Our Team</p>
                  <p className="dropdown-item">Testimonial</p>
                  <p className="dropdown-item">404 Page</p>
              </div>
          </div>
          <p className="nav-item nav-link m-auto p-4"  style={{fontSize:'20px'}}>Contact</p>
      </div>
      <BasicModal buttonTxt="SIGN UP" title="SIGN UP" type="signup" content="content goes here" />
      <BasicModal buttonTxt="SIGN IN" title="SIGN IN" type="signin" content="content goes here" />
      {/* <p className="btn btn-info py-4 px-lg-5 d-none d-lg-block text-white m-1" style={{paddingBottom:'10px'}}>Join Now</p> */}
  </div>
</nav>
}

export default TempHeader;
