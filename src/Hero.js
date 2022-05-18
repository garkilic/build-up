import React from 'react'
import exercise from './img/exercise.png'

export default function Hero() {
    return (
        <section className=" hero container">
            <div className="hero--text">
                <h1 className='hero--explainer'>
                    <span>Affordable Workouts.</span> <br />
                    <span className="hero--color">Finally.</span>
                </h1>
                <p className='hero--maintext'>
                    Workout created for you, by a personal trainer, with no monthly fee.<br /> Just you and your workout for one low price.
                </p>
                <a className="signup" href="#">Sign Up</a>
            </div>
            
            <div>
                <img className="hero--img"src={exercise}></img>
            </div> 

        </section>
    )
}