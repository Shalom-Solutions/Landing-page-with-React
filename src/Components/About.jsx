import React from 'react'

function About(props) {
  return (
    <div id="about">
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error, id voluptatibus vero eius similique mollitia! Saepe magni voluptas optio.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nemo? </p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About