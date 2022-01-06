import React from "react";
import Header from "./Header";
import Section from "./Section";
import { Link } from "react-router-dom";

import "./App.css";
import Routing from "./Routes/Routing";
import Primary from "./Primary";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid ">
          <div className="row">
            <div className="col-2">
              <Section />
            </div>
            <div className="col-10 card  tst ">
              <div className="row">
                <div className="col-2 d-flex justify-content-center cus cur p-2 mxt ">
                  <div className="p-2">
                    <i class="fas fa-tablet-alt"></i>
                  </div>
                  <div className="p-2 active">
                    <p>
                      <Link
                        to="/Primary "
                        className="text-decoration-none  text-dark fw-bold "
                      >
                        
                        Primary
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-center cur p-2 mxt">
                  <div className="p-2">
                    <i class="fas  fa-user-friends"></i>
                  </div>
                  <div className="p-2">
                    <p>
                      
                      <Link
                        to="/Social"
                        className="text-decoration-none text-dark  fw-bold"
                      >
                        Social
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-center cur p-2 mxt">
                  <div className="p-2">
                    <i class="fas fa-tag"></i>
                  </div>
                  <div className="p-2">
                    <p>
                    
                      <Link
                        to="/Promotoins"
                        className="text-decoration-none text-dark  fw-bold"
                      >
                        Promotoins
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div  >
                <Routing />
               <Primary />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
