import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FutureFinance from "./components/FutureFinance/FutureFinance";
import Philosophy from "./components/Philosophy/Philosophy";
import PhilosophyCards from "./components/PhilosophyCards/PhilosophyCards";
import TechnologyBuilt from "./components/TechnologyBuilt/TechnologyBuilt";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import BrandsLogos from "./components/BrandsLogos/BrandsLogos";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <FutureFinance></FutureFinance>
      <Philosophy></Philosophy>
      <PhilosophyCards></PhilosophyCards>
      <TechnologyBuilt></TechnologyBuilt>
      <Counter></Counter>
      <BrandsLogos></BrandsLogos>
      <Footer></Footer>
    </>
  );
}

export default App;
