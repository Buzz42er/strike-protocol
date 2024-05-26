import React from 'react'

const FAQ = () => {
  return (
    <section className='FAQ'>
        <h2>FAQ</h2>
        {/* map to render questionas and answers */}
        {/* on question click render answer */}
        <div className='FAQQuestion'>
            <p>Some Question</p>
        </div>
        <div className='FAQAnswer'>
            <p>Some Answer</p>
        </div>
    </section>
  )
}

export default FAQ