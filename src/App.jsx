import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-void px-6 md:px-10 screen min-h-screen relative overflow-hidden">
        <div className="h-10 w-full bg-black fixed top-0 z-50 md:hidden"></div>
        <Navbar />
        <Hero />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
