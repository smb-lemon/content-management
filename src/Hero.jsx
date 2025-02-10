import heroImg from "./assets/hero.svg";
import React from 'react';

function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Content Management</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusantium? Illo suscipit fuga commodi laborum error nihil, 
                    architecto nostrum adipisci beatae, officia cupiditate magnam? Praesentium pariatur aspernatur quam dicta aliquid.
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