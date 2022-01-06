import React from "react";
import "./App.css";
import logo from "../src/Assets/Plus.png";
class Section extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex shadow  rounded-pill w-75 mt-3">
          <div className="p-2">
            <img src={logo} alt="Plus" />
          </div>
          <div className="p-2">Compose</div>
        </div>

        <div>
          <div className="mt-3">
            <div className="d-flex inb rounded-pill ">
              <div className=" pt-2 ps-3 ">
              
                <i class="fas fa-tablet-alt"></i>
              </div>

              <div className=" pt-2 ps-3 ">
                <p>Inbox</p>
              </div>
            </div>
            <div className="d-flex inb rounded-pill ">
              <div className=" pt-2 ps-3 ">
              
              <i class="far fa-star"></i>
              </div>

              <div className=" pt-2 ps-3 ">
                <p>Starred</p>
              </div>
            </div>
            <div className="d-flex inb rounded-pill ">
              <div className=" pt-2 ps-3 ">
              
              <i class="fas fa-file-alt"></i>
              </div>

              <div className=" pt-2 ps-3 ">
                <p>Draft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Section;
