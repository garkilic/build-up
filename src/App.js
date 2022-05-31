import React from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero"
import About from "./components/About"
import Training from "./components/Training";
import Footer from './components/Footer';



export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Training />
            <Footer />
        </div>
       
    )
}