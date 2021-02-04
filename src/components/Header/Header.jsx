import React from "react";
import Logo from "../../assets/pizza logo.png"
import "./styles.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="header-body">
                <img src={Logo} alt="pizza logo" className="header-body__img"/>
                <div className="header-body__title">
                    Pizza Customization
                </div>
            </div>
        </div>
    );
}

export default Header
