import React from 'react';

function Video({onUpload}) {
    return (
        <div className="col-12">
            <div className="form__video">
                <label id="movie1" htmlFor="form__video-upload">Upload video</label>
                <input onChange={onUpload} data-name="#movie1" id="form__video-upload" name="movie" className="form__video-upload" type="file" accept="video/mp4,video/x-m4v,video/*" />
            </div>
        </div>
    );
}

export default Video;