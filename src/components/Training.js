import React from "react"
import '../style.css'


export default function Training() {
    return (
        <section className=" training--section container">
             <div className="training--pricing" id="pricing">
             <h2>Early Bird Offering</h2>
                <h3>$50 for 3 month plan</h3>
                <ul className="training--list">
                    <li>No more guesswork! An easy to follow workout plan personalized to you.</li>
                    <li>No expensive apps or equipment needed.</li>
                    <li>Time and science based workouts that fit your schedule</li>
                    <li>No monthly subscriptions.</li>
                    <li>Team that cares about you.</li>             
                </ul>
                <a className="signup" href="#about">Try Now!</a>
            </div> 
        </section>
    )
}