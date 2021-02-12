import React from 'react';

function Navbar(props) {
    return (
        <>
             {/* header */}
            <header className="header__admin">
            <div className="header__content">
                {/* header logo */}
                <a href="index-2.html" className="header__logo">
                    <img src="/assets/logo.svg" alt="images"/>
                </a>
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