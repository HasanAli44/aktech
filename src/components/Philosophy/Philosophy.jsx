// import philosophyImg from "../../../public/images/1010.avif";
import philosophyImg from "../../assets/images/1010.avif";

const Philosophy = () => {
  return (
    <div className="py-10 mx-auto xl:px-40 p-5">
      <div className="text-center">
        <p className="text-[#1F80F0] font-semibold monserret">OUR PHILOSOPHY</p>
        <h2 className="xl:text-[56px] pt-5 text-4xl monserret font-semibold text-[#0B305B]">
          Human-centred innovation
        </h2>
        <div className="pt-10">
          <img src={philosophyImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
