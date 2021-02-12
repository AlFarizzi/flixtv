import React from 'react';

function Poster({onUpload}) {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-12">
            <div className="form__img">
                <label htmlFor="form__img-upload">Upload cover</label>
                <input onChange={onUpload} id="form__img-upload" type="file"/>
                <img id="form__img" src="#" alt=" " />
            </div>
            </div>
        </div>
    );  
}

export default Poster;