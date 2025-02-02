import futureImg from "../../assets/images/01.avif";
import svgimg1 from "../../assets/images/00011.svg";
import svgimg2 from "../../assets/images/00022.svg";
import svgimg3 from "../../assets/images/00033.svg";
import shapimg1 from "../../assets/images/shap1.png";
import shapimg2 from "../../assets/images/shap2.png";

import "./future.css";
const FutureFinance = () => {
  return (
    <div className="py-20 my-10 xl:px-40 px-5">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 ">
        <div>
          <p className="text-[#1F80F0] font-bold monserret">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h2 className="xl:text-[56px] md:text-4xl text-3xl !leading-[1.2] monserret  font-semibold text-[#0B305B] xl:leading-16 md:leading-14 pt-8">
            Uncovering new <br /> ways to delight <br /> customers
          </h2>
          <p className="text-[#164377] font-bold pt-8">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#146377] pt-8">
            Our modern approach surpasses tradition <text-3></text-3>al banking
            and card processing systems, empowering you with the most advanced
            technology for lasting success.
          </p>
        </div>
        <div className="relative z-10 md:ml-10 mt-10">
          <img className="xl:w-[76%] " src={futureImg} alt="" />

          <div className="absolute xl:top-28 md:top-16 top-14  xl:-left-9 md:-left-8 -left-5">
            <img className="animate" src={svgimg1} alt="" />
          </div>
          <div className="absolute xl:top-60 md:top-40 top-52 xl:left-16 md:left-8 left-10">
            <img className="animate" src={svgimg2} alt="" />
          </div>
          <div className="absolute top-14 xl:right-14 -right-10">
            <img className="animate" src={svgimg3} alt="" />
          </div>
          <div className="absolute animate  -z-10 -left-12  -top-10">
            <img className="" src={shapimg2} alt="" />
          </div>
          <div className="absolute xl:-bottom-[65px] md:bottom-5 -bottom-10 xl:right-16 md:-right-10 -right-16">
            <img src={shapimg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureFinance;
