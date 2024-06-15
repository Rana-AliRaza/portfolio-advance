import "./App.css";
import About from "./components/maincontent/About";
import Facts from "./components/maincontent/Facts";
import Header from "./components/maincontent/Header";
import Skills from "./components/maincontent/Skills";
import Resume from "./components/maincontent/Resume";
import Portfolio from "./components/maincontent/Portfolio";
import Services from "./components/maincontent/Services";
import Testimonials from "./components/maincontent/Testimonials";
import Contact from "./components/maincontent/Contact";
import Footer from "./components/maincontent/Footer";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMenu } from "react-icons/md";



function App() {
  const [checkSideBar, setCheckSideBar] = useState(true); // Start with sidebar open on larger screens

  // Function to toggle sidebar state
  const toggleSideBar = () => {
    setCheckSideBar((prevState) => !prevState);
  };

  // Effect to handle sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Close sidebar on smaller screens
      if (window.innerWidth <= 1000) {
        setCheckSideBar(false);
      } else {
        // Open sidebar on larger screens
        setCheckSideBar(true);
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="relative">
        {/* Button to toggle sidebar */}
        <button
          onClick={toggleSideBar}
          className="fixed top-4  right-4 md:right-8 z-[1000] bg-blue-500 text-white font-bold p-4  rounded-full shadow"
        >
          {checkSideBar ? <RxCross2 /> : <MdOutlineMenu />}
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${checkSideBar ? "" : "hidden"}`}>
          <SideBar />
        </div>

        {/* Main content area */}
        <main className={`content ${checkSideBar ? "with-sidebar" : ""}`}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="overflow-hidden">
                  <Header />
                  <About />
                  <Facts />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Services />
                  <Testimonials />
                  <Contact />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
