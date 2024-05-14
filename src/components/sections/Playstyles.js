import React from 'react'

const Playstyles = () => {
  return (
    <section className='playStyles'>
      <h2>Playstyles</h2>
      <div>
        <div className='arrowLeftPlayStyles'></div>
        <div className='mainPlayStyles'>
          <article>
            <h5>Outfits and Weapons</h5>
            <p>
            Equip your Infiltrators with cutting-edge gear in Strike Protocol. Discover different outfits and weapons, each offering different bonuses and stats. Customize your equipment to match your strategic approach and dominate the base raids.
            </p>
          </article>
          <article>
            <h5>Skills</h5>
            <p>
            As an Infiltrator, you embark on missions for epic rewards. Choose a base within your level range and navigate through cunning challenges. Dodge traps, defeat enemies and breach the enemy Commander's database. Successful raids reward you with gear, resources, and currencies.            </p>
          </article>
        </div>
        <div className='arrowRightPlayStyles'></div>
      </div>
      <div>
        <h4>Infiltrators</h4>
        <div>
          <button className='InfiltratorBreadCrumbs'></button>
          <button className='CommanderBreadCrumbs'></button>
        </div>
      </div>
    </section>
  )
}

export default Playstyles