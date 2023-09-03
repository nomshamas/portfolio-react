import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero_video"
        poster="https://mixkit.imgix.net/videos/preview/mixkit-software-developer-working-while-drinks-coffee-1730-0.jpg?q=80&amp;auto=format%2Ccompress"
        src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-while-drinks-coffee-1730-large.mp4">
        Your browser does not support the video tag.
      </video>
      <div className="container hero_content text-center">
        <h1 className="hero_intro">Nom Shamas,</h1>
        <h3 className="hero_designation">
          <span className="text-slider-items">
            Freelance Software Engineer
          </span>
          <strong className="text-slider"></strong>
        </h3>
        <h4 className="hero_designation">Freelance Software Engineer</h4>
      </div>
    </section>
  )
}

export default Hero