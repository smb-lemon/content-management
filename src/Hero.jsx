import heroImg from "./assets/hero.svg";
import React from 'react';

function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Content Management</h1>
                <p>
                Content management is a platform that helps users create, manage, store, and modify their digital content. 
                This all-encompassing system is a one-stop-shop to store content—such as apps, images, and websites—in a user-friendly 
                interface that is customizable to an organization’s needs and their employees.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="women and the browser" className="img"/>
            </div>
        </div>
    </section>
  )
}

export default Hero