import React, { Component } from 'react';
//stateless functional components use sfc
const Navbar = (props) => {
    console.log("navbar -rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar 
                    <span className="badge badge-pill badge-secondary m-2">{props.totalCounters}</span>
                </a>
            </nav>
     );
}
 
// class Navbar extends Component {
    
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar 
//                     <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//          );
//     }
// }
 
export default Navbar;