import AnimatedCursor from "react-animated-cursor";
import { Services } from "../services/Services";
import "./app.scss";
import Contact from "./component/contact/Contact";
import Hero from "./component/hero/hero";
import NavBar from "./component/navbar/NavBar";
import Parallax from "./component/parallax/parallax";
import PortFolio from "./component/portfolio/PortFolio";
import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return <div>
    
    <AnimatedCursor
  
  innerSize={8}
  outerSize={40}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: '#fff',
    zIndex:1000
  }}
  outerStyle={{
    border: '2px solid #fff',
    zIndex:1000
  }}
/>

    <section id="About">
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
    <ScrollToTop
      smooth
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'bounce 2s infinite',
        backgroundColor: 'rgb(54,49,98)',
        zIndex: '999'
      }}
      viewBox="0 0 24 24"
      svgPath="m18 15-6-6-6 6"
    />
  </div>;
};

export default App;
