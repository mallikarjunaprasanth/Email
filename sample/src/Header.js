import React from "react";
import img from "./Assets/logo.png";
import "./App.css";
class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid card ">
        <div className=" ">
          <div className="row">
            <div className="col-3 mt-2">
              <ul className="d-flex list-unstyled">
                <li className="p-2  ">
                  <i className="fas fa-1x fa-bars"></i>
                </li>
                <li className="ms-3">
                  <img src={img} alt="logo" />
                </li>
              </ul>
            </div>
            <div className="col-7 p-1 ">
              <nav className="navbar rounded-3 navbar-light bg-light   ">
               
                  <div className="">
                    <form class="d-flex form-control ">
                      <div className="p-2">
                        <i className="fas fa-1x fa-search"></i>
                      </div>
                      <div >
                        <input
                          className="form-control blr  border-0 me-2 "
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                      <div className="p-2">
                        <i className="fas fa-sliders-h"></i>
                      </div>
                    </form>
                  </div>
             
              </nav>
            </div>
            <div className="col-2   ">
                <ul className="d-flex list-unstyled ms-4 pt-3 gap-1 justify-content-center">
                    <li><i className="far fa-1x p-2 fa-question-circle"></i></li>
                    <li><i className="fas fa-1x p-2 fa-cog"></i></li> 
                    <li><i className="fas fa-1x p-2  fa-th"></i></li>
                    <li className=" rounded-3 pt-1">
                      <span className="bg-primary  rounded-circle text-white  p-1 pb-2 ps-2 pe-2" >m</span>
                    </li>
                </ul>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
