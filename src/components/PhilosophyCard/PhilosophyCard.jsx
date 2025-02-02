import React from "react";

const PhilosophyCard = ({ philosophy }) => {
  const { image, title, description } = philosophy;
  return (
    <div className="bg-[#F8FCFF] p-8 rounded-3xl">
      <img src={image} alt="" />
      <h2 className="text-2xl font-semibold text-[#0B305B] py-6 monserret">
        {title}
      </h2>
      <p className="text-[#164377] leading-7">{description}</p>
    </div>
  );
};

export default PhilosophyCard;
