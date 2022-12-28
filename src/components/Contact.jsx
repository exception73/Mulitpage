import React from 'react'

export const Contact = () => {
  return (
   <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form >

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Gautam'/>
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Gautam@gmail.com'/>
                </div>

                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Tell us about your query...'/>
                </div>


                <button type='submit'>Send</button>

            </form>
        </main>
   </div>
  )
}
