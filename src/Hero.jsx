import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Cray YOLO banh mi organic semiotics fam mlkshk. Bodega boys
            taxidermy art party church-key flannel vinyl. Poke letterpress jawn
            migas shoreditch, tattooed cronut yuccie bitters JOMO neutra fam
            hammock. Schlitz af direct trade banh mi leggings viral. Brooklyn
            tilde DSA, succulents selvage 3 wolf moon same hell of flannel
            enamel pin woke try-hard williamsburg
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
