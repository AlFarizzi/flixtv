import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
function Select2({options,changeHandler}) {
    return (
        <>
             <Select
                onChange={changeHandler}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                options={options}
                isMulti
                isSearchable
                className="custom__styles"
            />
        </>
    );
}

export default Select2;