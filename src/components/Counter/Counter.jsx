import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="py-10 my-10 mx-auto xl:px-40 px-5  ">
      <div className="text-center">
        <p className="text-[#1F80F0] font-bold pb-8 monserret">
          TRUSTED BY THE BEST
        </p>
      </div>
      <div className="grid xl:grid-cols-3  gap-10 xl:mx-40 mx-10">
        <div className="md:flex flex xl:block xl:justify-items-start md:justify-between justify-between  md:items-center xl:border-none border-b border-dotted border-blue-300">
          <div className="flex monserret xl:text-8xl md:text-[64px] text-[40px] text-[#1F80F0] font-semibold  text-center">
            <span> {">"} </span>
            <CountUp end={20} duration={40}></CountUp>
          </div>
          <p className="text-[18px]  mt-[19px] ">Years of Experience</p>
        </div>
        <div className="md:flex flex xl:block xl:justify-items-start md:justify-between justify-between md:items-center xl:border-none border-b border-dotted border-blue-300">
          <div className="flex monserret xl:text-8xl md:text-[64px] text-[40px] text-[#1F80F0] font-semibold text-center">
            <CountUp end={40} duration={40}></CountUp>
            <span>+</span>
          </div>
          <p className="text-[18px]  mt-[19px] ">Financial Institutions</p>
        </div>
        <div className="md:flex flex xl:block xl:justify-items-start md:justify-between justify-between  md:items-center xl:border-none border-b border-dotted border-blue-300">
          <div className="flex monserret xl:text-8xl md:text-[64px] text-[40px] text-[#1F80F0]  font-semibold">
            <span> {">"} </span>
            <CountUp end={200} duration={40}></CountUp>
            <span>m</span>
          </div>
          <p className="text-[18px]  mt-[19px] xl:ml-20">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
