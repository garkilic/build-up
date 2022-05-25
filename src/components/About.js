import React from "react"
import '../style.css'
import { FaQuestion } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegGrin } from "react-icons/fa";



export default function About() {
    return (
        <div className="containers container" id='about'>
            <div className="container--one">
                <FaQuestion className="containers--icon" />
                <h2>Tell Us Your Goals</h2>
                <p>Answer 10 simple questions that will help your personal trainer create the best workout plan for you. </p>
            </div>

            <div className="container--two">
                <FaPaperPlane className="containers--icon"/>
                <h2>Receive Your Plan</h2>
                <p>Within 48 hours, you will receive your custom workout plan via email.</p>
            </div>

            <div className="container--three">
                <FaRegGrin className="containers--icon"/>
                <h2>Follow Your Plan</h2>
                <p>Follow your personalized plan and reap the benefits of a workout made for you.</p>
            </div>
        </div>

    )
}