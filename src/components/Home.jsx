import React from 'react'
import img2 from '../assests/2.webp'
import { 
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
  } from 'react-icons/ai'

const Home = () => {
  return (
    <div>

        <div className='home1' id='home'>
            <h1>React</h1>
            <p>Solution to all your problems</p>
        </div>

        <div className="home2">
            <img src={img2} alt="logo.png" />
            
            <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptate error voluptas, quis architecto provident quibusdam quo sit quia repellendus!</p>

        </div>

      <div className="home3" id='about'>

        <div className="home3cont">
          <h1>WHO WE ARE?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro architecto maxime possimus totam, in molestiae assumenda! Eum similique et harum assumenda quisquam fugit recusandae voluptates tempore obcaecati. Facilis suscipit quod corporis necessitatibus natus, maiores maxime nisi, et reiciendis qui eveniet non beatae eius ipsa, ad enim dicta nostrum cupiditate atque libero voluptatibus voluptas magni quas! Unde, deserunt recusandae possimus odio fugiat adipisci facere quidem, suscipit deleniti reiciendis debitis dolorum quia!</p>
        </div>

      </div>


      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{
              animationDelay:"0.9s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>

        </div>

        
      </div>


    </div>
  )
}

export default Home