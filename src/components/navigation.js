import React from "react";
import * as ROUTE from "../constants/routes";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/cara.png";
import Search from "./search";
import Basket from "./basket";
import Authenticate from "./authenticate";

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to='/'>
                    <img alt="Logo" src={logo} />
                </Link>
            </div>

                <ul className="navigation-menu-main">
                    <li><NavLink className="navigation-menu-active" to={ROUTE.HOME}>Home</NavLink></li>
                    <li><NavLink className="navigation-menu-active" to={ROUTE.SHOP}>Shop</NavLink></li>
                    <li><NavLink className="navigation-menu-active" to={ROUTE.FEATURED_PRODUCTS}>Featured</NavLink></li>
                    <li><NavLink className="navigation-menu-active" to={ROUTE.RECOMMENDED_PRODUCTS}>Recommended</NavLink></li>   
                </ul>

                <Search />

                <ul className="navigation-menu">
        <li className="navigation-menu-item">
                <Basket/>
                </li>
                <li className="navigation-menu-item">
                <Authenticate />
                </li>
                </ul>
        </nav>
    )
}

export default Navigation;