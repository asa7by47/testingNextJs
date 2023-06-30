import React from "react";

const HeaderText = ({
  text,
  BgLine,
  bgWhite,
  developmentFontSize,
  textWhite,
  LeadingLine,
  trendingLineWidth,
  removePadding,
  displayNone,
  trendingFontSize,
  hideLeadingLine,
  leadingFontSize
}) => {
  return (
    <div className={`d-flex justify-content-center p-3 ${removePadding}`}>
      <div
        className={`line mt-3 me-2 bg-black  mtop ${BgLine} ${bgWhite} ${LeadingLine} ${trendingLineWidth} ${displayNone} ${hideLeadingLine}`}
      ></div>
      <h5
        className={`ms-2  responsive-font colorBlue ${developmentFontSize} ${textWhite} ${trendingFontSize} ${leadingFontSize}`}
      >
        {text}
      </h5>
      <div
        className={`line mt-3 ms-3 bg-black  mtop ${BgLine} ${bgWhite} ${LeadingLine} ${trendingLineWidth} ${displayNone} ${hideLeadingLine}` }
      ></div>
    </div>
  );
};

export default HeaderText;
