import React from "react";

const CheckBox = ({ title, click }) => {
  return (
    
      <div className="text-center">
        <label className="pointer">
        <input
          type="checkbox"
          className="check"
          onChange={click}
          value={title}
          name={title}
        />
        <br />
          {title}
        </label>
        {/* <p className="text-muted"> {title} </p> */}
      </div>
    
  );
};

export default CheckBox;
