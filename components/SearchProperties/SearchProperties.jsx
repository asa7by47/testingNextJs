import React from "react";

const SearchProperties = ({
  subtitle,
  title,
  target,
  controls,
  handleClick,
  click,
}) => {
  return (
    <div className="">
      <div className="text-center">
        <h5 className="color">
          <span
            className="collapsed color-blue"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={target}
            aria-expanded="false"
            aria-controls={controls}
            onClick={click}
          >
            {title}
          </span>
        </h5>
        <p className="text-muted rangeSize"> {subtitle} </p>
      </div>
    </div>
  );
};

export default SearchProperties;
