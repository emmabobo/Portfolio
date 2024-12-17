import React from 'react'

export const Contact = () => {
  return (
    <div className='container'>
      <div className="contact">
        <form action="">
          <h2>Reach out to him</h2>
          <div className="input-box">
            <label htmlFor="">Full Name</label>
            <input type="text" className='field' placeholder='Enter your Name' required />
          </div>
          <div className="input-box">
            <label htmlFor="">Email Address</label>
            <input type="email" className='field' placeholder='Enter your email' required />
          </div>
          <div className="input-box">
            <label htmlFor="">Email Address</label>
            <textarea className=' field mess' placeholder='Kindly reach out with your message ' required ></textarea>
          </div>
          <button className='btn btn-form' type='submit'>Send Message </button>
        </form>
      </div>

    </div>
  )
}
