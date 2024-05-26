import React from 'react'

const Token = () => {
  return (
    
      <section className='Token'>
        <h2 className='h2Different'>Token</h2>
        <div>
          <article>
              <h4>About the Token</h4>
              <p>The $STPR token serves as the primary currency for purchasing in-game options within Strike Protocol. While it's not necessary to play the game, it's there for players who want to delve into the world of cryptocurrency.
              </p>
              <p>
               Think of $STPR as the main currency that fuels the game's economy. It adds extra features like crypto and NFTs to enhance gameplay, but you can still enjoy the game without it. It's all about rewarding players and expanding the possibilities within Strike Protocol.</p>
          </article>
          <article>
            <img src={require('../../assets/Token/TokenImg.png')} className='TokenImg'/>
          </article>
        </div>
        
    </section>
  )
}

export default Token