import React from 'react';

function Input({type, label, defaultValue, changeHandler}) {

  return (
      <>
          {/* Input */}
            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="username">{label}</label>
                    <input id="username" type={type} className="sign__input" onChange={e => changeHandler(e.target.value)} placeholder={defaultValue} />
                </div>
            </div>
        {/* Input */}
      </>
    );
}

export default Input;