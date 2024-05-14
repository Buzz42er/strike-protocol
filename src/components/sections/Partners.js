import React from 'react'

  
const partners = ["Array","1","2","3"];
//Import from files, list of pictures in the file, maybe later from backend
// treba vidit kako da spojim lokaciju slika "automatski"

const Partners = () => {

  return (

    <div className='Main-Partners'>
      
      {/* <h2>Partners</h2> */}
      
      <div className='second-Partners'>
      {partners.map((partner) => {
                return <div key={partner} className='Partner-div' >
                  <p>{partner}</p>
                     {/* <img src={"../../partner-images/" + partner} className='Partner-image'/> */}
                  </div>
            })}
      </div>
    </div>

  )
}

export default Partners