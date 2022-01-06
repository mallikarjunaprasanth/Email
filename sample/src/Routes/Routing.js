import React, { Component } from 'react'
import {Routes,Route} from "react-router-dom";
import Primary from '../Primary';
import Promotoins from '../Promotoins';
import Social from '../Social';
class Routing extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/Social"  element={<Social/>} />
                    <Route path="/Primary"  element={<Primary/>} />
                    <Route path="/Promotoins" element={<Promotoins/>} />


                </Routes>
                
            </div>
        )
    }
}
export default Routing;
