import React from 'react';
import CarouselItem from './CarouselItem';

function Carousel({movies}) {
    console.log(movies)
    return (
        <>
            {/* home */}
            <div className="home home--static">
                <div className="home__carousel owl-carousel" id="flixtv-hero">
                    {
                        movies.map((movie,key) => (
                            // <React.Fragment key={key}>
                                <CarouselItem key={key} movie={movie} />
                            // </React.Fragment>
                        ))
                    }
                </div>
                <button className="home__nav home__nav--prev" data-nav="#flixtv-hero" type="button" />
                <button className="home__nav home__nav--next" data-nav="#flixtv-hero" type="button" />
            </div>
            {/* end home */}
        </>
    );
}

export default Carousel;