import { Services } from "../services/Services";
import "./app.scss";
import Hero from "./component/hero/hero";
import NavBar from "./component/navbar/NavBar";
import Parallax from "./component/parallax/parallax";

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
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
