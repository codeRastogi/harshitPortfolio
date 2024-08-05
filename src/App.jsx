import { Services } from "../services/Services";
import "./app.scss";
import Contact from "./component/contact/Contact";
import Hero from "./component/hero/hero";
import NavBar from "./component/navbar/NavBar";
import Parallax from "./component/parallax/parallax";
import PortFolio from "./component/portfolio/PortFolio";

const App = () => {
  return <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type = "services"/>
    </section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type= "portfolio"/></section>
    <PortFolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
