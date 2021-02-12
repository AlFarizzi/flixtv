import React from 'react';

function NotFound(props) {
    return (
        <>
            {/* 404 */}
            <div class="page-404 section--full-bg" data-bg="img/bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-404__wrap">
                                <div class="page-404__content">
                                    <h1 class="page-404__title">404</h1>
                                    <p class="page-404__text">The page you are looking for not available!</p>
                                    <a href="/" class="page-404__btn">go back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 */}
        </>
    );
}

export default NotFound;