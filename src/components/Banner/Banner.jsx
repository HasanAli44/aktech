import { MdKeyboardArrowRight } from "react-icons/md";
import svgImg from "../../assets/nn.svg";
import bannerImg from "../../assets/banner.avif";

import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-gradint  relative overflow-hidden">
      <img
        className="absolute z-10 svgImg object-cover w-full h-full"
        src={svgImg}
        alt=""
      />
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
        <figure className="h-[115%] w-[115%] object-cover">
          <img className=" z-10 object-cover" src={bannerImg} alt="" />
        </figure>
      </div>
      <div className="banner-bg">
        <div className="xl:px-40 px-5 relative z-10 text-white">
          <h1 className="xl:text-[80px] monserret md:text-5xl text-3xl  font-semibold xl:leading-24 md:leading-20 xl:pt-32 pt-10">
            Embrace the <br /> future of finance
          </h1>
          <p className="font-semibold pt-5 monserret">
            Reimagine financial services with AnyTech’s open platform,
            distributed
            <br /> banking solution that powers transformation
          </p>
          <div className="pt-10">
            <div>
              <button className="bg-[#FE8B53] w-52 h-14 group text-[18px] flex items-center justify-center  font-[600] text-white rounded-md">
                Reach Out to Us
                <span className="group-hover:mr-2 transition-all duration-500"></span>
                <MdKeyboardArrowRight className=""></MdKeyboardArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
