import Header from "./Header.js";
import CardContainer1 from "./CardContainer1.js";
import Services from "./Services.js";
import CardContainer2 from "./CardContainer2.js";
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";

const isMobile = window.innerWidth <= 768;
function App() {
  return (
    <div className="App">
     <Header />
     <CardContainer1 />
     <Services />
     <CardContainer2/>
     { isMobile && <Gallery /> }
     <Contact />
    </div>
  );
}

export default App;