import { useEffect, useState } from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

const BrandsLogos = () => {
  const [brandsLogos, setBrandsLogos] = useState([]);
  useEffect(() => {
    fetch("logo.json")
      .then((res) => res.json())
      .then((data) => setBrandsLogos(data));
  }, []);
  return (
    <div className="xl:px-40 px-5 pb-10">
      <h4></h4>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-16 items-center">
        {brandsLogos.map((logoimg, idx) => (
          <BrandLogo key={idx} logoimg={logoimg}></BrandLogo>
        ))}
      </div>
    </div>
  );
};

export default BrandsLogos;
