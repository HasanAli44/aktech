import { useEffect, useState } from "react";
import PhilosophyCard from "../PhilosophyCard/PhilosophyCard";

const PhilosophyCards = () => {
  const [PhilosophyCards, setPhilosophyCards] = useState([]);

  useEffect(() => {
    fetch("/philosophy.json")
      .then((res) => res.json())
      .then((data) => setPhilosophyCards(data));
  }, []);

  return (
    <div className="py-10 mx-auto">
      <h2></h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[30px] xl:px-40 px-5 ">
        {PhilosophyCards.map((philosophy, idx) => (
          <PhilosophyCard key={idx} philosophy={philosophy}></PhilosophyCard>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyCards;
