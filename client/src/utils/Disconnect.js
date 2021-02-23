import React from 'react';

function Disconnect(props) {
    return (
      <>
        {/* page 404 */}
        <div className="page-404 section--full-bg" data-bg="img/bg.jpg">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="page-404__wrap">
                <div className="page-404__content">
                    <h1 className="page-404__title">408</h1>
                    <p className="page-404__text">Reqeuest Timeout</p>
                    <a href="/" className="page-404__btn">Reconnect</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* end page 404 */}
      </>
    );
}

export default Disconnect;