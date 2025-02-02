import mainlogo from "../../assets/images/logo.webp";
import { FaLinkedin } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#002045] py-14 ">
        <div className="mx-auto xl:px-40 px-5">
          <div className="grid xl:grid-cols-2 grid-cols-3 gap-10  ">
            <div className="">
              <img src={mainlogo} alt="" />
            </div>

            <div className="xl:flex  hidden">
              <h5 className=" font-bold text-[#00E9EA]">Our Solutions</h5>
              <span className=" border-r border-[#55757586] xl:mx-10 "></span>
              <a
                className="text-[#00E9EA] hover:text-[#1F80F0] transition-all duration-500"
                href="#"
              >
                AnyCaaS
              </a>
              <a
                className="text-[#00E9EA] ml-5 hover:text-[#1F80F0] transition-all duration-500"
                href="#"
              >
                AnyBaaS
              </a>
              <a
                className="text-[#00E9EA] ml-5 hover:text-[#1F80F0] transition-all duration-400"
                href="#"
              >
                AnyPaaS
              </a>
            </div>
            <div className="flex xl:hidden ">
              <a href="#">
                <FaLinkedin className="text-[#1F80F0] text-3xl"></FaLinkedin>
              </a>
              <a className="ml-5" href="#">
                <MdCall className="text-[#1F80F0] text-3xl"></MdCall>
              </a>

              <a className="ml-5" href="#">
                <IoMdMail className="text-[#1F80F0] text-3xl"></IoMdMail>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00152D] py-10">
        <div className="xl:px-40 px-5 xl:flex md:flex md:justify-between xl:justify-between">
          <p className="text-[#1F80F0] font-semibold text-xs">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <p className="text-[#1F80F0] font-semibold text-xs">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
