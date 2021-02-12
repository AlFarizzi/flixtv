import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loader({ loading }) {
    return (
        <ClipLoader color={"#ffffff"} loading={loading} css={{
            position:"absolute",
            zIndex:999,
            top:"50%",
            left:"50%"
          }} size={150} />
    );
}

export default Loader;