import React from "react"
import '../style.css'
import { FaQuestion } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegGrin } from "react-icons/fa";



export default function About() {
    return (
        <div className="containers container">
            <div className="container--one">
                <FaQuestion className="containers--icon" />
                <h2>Tell Us Your Goals</h2>
                <p>Answer a few questions that will help your personal trainer create the best workout plan to help you reach your goals. </p>
            </div>

            <div className="container--two">
                <FaPaperPlane className="containers--icon"/>
                <h2>Receive Your Plan</h2>
                <p>Within 48 hours, you will receive your custom workout plan via email. This plan is yours to keep forever and will help you workout confident that you are doing the right exercises.</p>
            </div>

            <div className="container--three">
                <FaRegGrin className="containers--icon"/>
                <h2>Stay In Touch</h2>
                <p>After you receive your plan it is up to you to execute. We will be here to answer any questions you may have, so feel free to keep in touch with any comments, concerns, or ideas! </p>
            </div>
        </div>

    )
}