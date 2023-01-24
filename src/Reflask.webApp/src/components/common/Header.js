import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

    const navigateToHome = () => {
        window.location.href = '/';
    }

    const navigateBack = () => {
        window.history.back();
    }

    const location = useLocation();

    return (
        <>
            <div id="back-btn" onClick={navigateBack}>
                <div className="back-btn-arrow">&larr;</div>
                <div className="back-btn-text">PREVIOUS</div>
            </div>
            <div id="logo" onClick={navigateToHome}></div>
        </>
    )
}

export default Header;