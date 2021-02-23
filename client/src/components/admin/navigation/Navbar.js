import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
             {/* header */}
            <header className="header__admin">
            <div className="header__content">
                {/* header logo */}
                <Link to="/admin" className="header__logo__admin">
                    <img src="/assets/logo.svg" alt="images"/>
                </Link>
                {/* end header logo */}
                {/* header menu btn */}
                <button className="header__btn" type="button">
                <span />
                <span />
                <span />
                </button>
                {/* end header menu btn */}
            </div>
            </header>
            {/* end header */}      
        </>
    );
}

export default Navbar;