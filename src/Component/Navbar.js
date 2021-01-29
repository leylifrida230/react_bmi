import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand" href="#">
                    Tugas RPP 2
                </a>

                {/** show and hide menu */}
                <button className="navbar-toggler" data-togler="collapse" 
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/** menu */}
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/bmi" className="nav-link">BMI</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bank" className="nav-link">Bank</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ppn" className="nav-link">PPN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/biner" className="nav-link">Biner</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/desimal" className="nav-link">Desimal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/heksadesimal" className="nav-link">Heksadesimal</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/oktal" className="nav-link">Oktal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;