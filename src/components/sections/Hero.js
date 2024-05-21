import React from 'react'

const Hero = () => {
  return (
    <section className='Hero'>
      <div>
        <img src={require('../../assets/herosection/no-bg1-3.png')} className='title'/>  
      </div>
      <div className='HeroButtonsDiv'>
        <button>{/*<img src={('')}/>*/}Watch Trailer</button> 
        <button>Get Alpha</button>
      </div>  
    </section>
  )
}

export default Hero