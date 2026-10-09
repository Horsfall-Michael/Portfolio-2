import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work.jsx";
import Stack from "./components/Stack.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
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
        <Work />
        <Stack />
        <Process />
        <Contact/>
      </div>
    </>
  );
}

export default App;
