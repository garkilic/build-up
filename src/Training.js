import React from "react"
import './style.css'


export default function Training() {
    return (
        <section className=" training--section container">
             
            
            <div className="training--text">
                <h2 className='training--explainer'>
                    <span>No More Fitness Apps.</span> <br />
                    <span className="training--color">Simple, Effective, Affordable, exercise.</span>
                </h2>
                <p className='training--maintext'>
                    Workout created for you, by a personal trainer, with no monthly fee.<br /> Just you and your workout for one low price.
                </p>
                <a className="signup" href="#">Sign Up</a>
            </div>
            
            <div className="training--pricing">
             <h2>Pricing:</h2>
                <p>$50 One Time Purchase. <br/> <em>50% goes to your personal traininer</em></p>
                <ul className="training--list">
                    <li>Workout PDF</li>
                    <li>3 month workout plan (yours forever)</li>
                </ul>
            </div> 
           

        </section>
    )
}