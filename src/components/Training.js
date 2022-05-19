import React from "react"
import '../style.css'


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
                <p>Benefits</p>
                <ul className="training--list">
                    <li>No more guesswork! Finally, a workout plan that fits your needs</li>
                    <li>Simple plan you can stick to</li>
                    <li>Time and science based workouts that fit your schedule</li>
                    <li>75% less expensive than the competition</li>
                    <li>Fitness that cares about you</li>
                </ul>
            </div> 
           

        </section>
    )
}