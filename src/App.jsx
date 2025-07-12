import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


function App() {
    return (
        <div className="bg-sky-50">
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default App;
