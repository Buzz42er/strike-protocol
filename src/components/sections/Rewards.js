import React from 'react'

const Rewards = () => {
  return (
    <section>
      <h2>Rewards</h2>
      <div>
        <div>
          <div className='RewardsArrows RA1'>
            <button></button>
          </div>
          <div className='mainRewardsDiv'>
            {/* function for rendering rewards */}
            <div className='RewardCard'>
              <div className='RewardSpec'>
               {/* Make it show on click of the RewardCardImg */}
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <img src={''} className='RewardCardImg'/>
              <h5 className='RewardCardName'>{''}</h5>
            </div>
          </div>
          <div className='RewardsArrows RA2'>
            <button></button>
          </div>
        </div>
        <div className='RewardsBreadCrumbs'>

          <button></button>
        </div>
      </div>
    </section>
  )
}

export default Rewards