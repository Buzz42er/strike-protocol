import React from 'react'

const socialMedia = ["Array","1","2","3"];


const Footer = () => {
  return (
    <section>
      <h4>SIGN UP FOR EMAIL UPDATES</h4>
      <div>
        <form>
          <input type='email'/>
          <button>Sign In</button>
        </form>
      </div>

      <div>
        <h4>FOLLOW US ON SOCIAL MEDIA</h4>
        <div>
        {socialMedia.map((icon) => {
                return <div key={icon} className='SocialMediaIcon' >
                 <a><img src={"../../socialMedia-icons/" + icon} className='socialMediaIcon'/></a>
                  </div>
            })}
          
        </div>
      </div>
    </section>
  )
}

export default Footer