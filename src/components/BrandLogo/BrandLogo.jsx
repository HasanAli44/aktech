import React from "react";

const BrandLogo = ({ logoimg }) => {
  const { logo_img } = logoimg;
  return (
    <div className="">
      <img src={logo_img} alt="" />
      <p></p>
    </div>
  );
};

export default BrandLogo;
