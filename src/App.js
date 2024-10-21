import CustumiseIt from "./components/CustumiseIt";
import Footer from "./components/Footer";
import FreeTrial from "./components/FreeTrial";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectManagement from "./components/ProjectManagement";
import Sponcers from "./components/Sponcers";
import UseExtention from "./components/UseExtention";
import WorkWith from "./components/WorkWith";
import YourData from "./components/YourData";
import YourWork from "./components/YourWork";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Header/>
       < HeroSection/>
       < ProjectManagement />
       < UseExtention />
       < CustumiseIt />

       < YourWork />
       <YourData />
       <Sponcers/>
       < WorkWith/>
       < FreeTrial/>
      < Footer />

      </header>
    </div>
  );
}

export default App;
