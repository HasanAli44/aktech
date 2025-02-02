import logoImg from "../../assets/images/logo.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
const Header = () => {
  return (
    <div className="navbar bg-transparent xl:px-40 px-5 z-10 absolute left-0 right-0 w-full">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#">Solutions</a>
              <ul className="p-2">
                <li>
                  <a href="#">AnyCaas</a>
                </li>
                <li>
                  <a href="#">AnyBaas</a>
                </li>
                <li>
                  <a href="#">AnyPaas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="">
          <img src={logoImg} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2 text-black">
                <li>
                  <a href="#">AnyCaas</a>
                </li>
                <li>
                  <a href="#">AnyBaas</a>
                </li>
                <li>
                  <a href="#">AnyPaas</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden">
        <div>
          <button className="bg-[#FE8B53] w-44 h-12 group text-[18px] flex items-center justify-center  font-[600] text-white rounded-md">
            Reach Out to Us
            <span className="group-hover:mr-2 transition-all duration-500"></span>
            <MdKeyboardArrowRight className=""></MdKeyboardArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
