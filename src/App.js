import React from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero"
import About from "./components/About"
import Training from "./components/Training";
import Footer from './components/Footer';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom"



export default function App() {
    return (
        <Router>
                
                    <Nav />
                    <Hero />
                    <About />
                    <Training />
                    <Footer />
          
        </Router>
        
       
    )
}