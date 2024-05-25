import React from 'react'

const TheProject = () => {
  return (
    <section className="TheProject">
        <h2>The Project</h2>
        <div>
          <article className='TheProjectText'>
              <h4>About our project</h4>
              <p>Get ready to explore the fascinating world of Strike Protocol. This groundbreaking multiplayer adventure seamlessly blends managing your base in an open sandbox environment with the thrill of raiding champion bases. In this gripping experience, players go beyond just playing – they conquer, taking on the roles of skilled Infiltrators or strategic Commanders. Whether you are building challenging bases or embarking on daring missions to dominate the creations of other players, get ready for an epic gaming journey.</p>
          </article>
          <article>
            <img src={require('../../assets/theproject/theprojectpicture.png')} className='TheProjectImg'/>
          </article>
        </div>
        
    </section>
  )
}

export default TheProject