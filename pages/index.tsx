import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import Embed from 'react-embed';
import { useState } from 'react';
import '../public/tim.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [change, setChange] = useState('home');
  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const [constrolstate, setControlState] = useState(true)
  const [mutedstate, setMutedState] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  function setLoad() {
    setTransitionStage('fadeOut')

    setTimeout(function setLoad() {
      setTransitionStage('fadeIn')
      setChange('loading')
    }, 1000)

    setTimeout(function update() {
      setTransitionStage('fadeOut')
    }, 5000
    )
    setTimeout(function change() {
      setTransitionStage('fadeIn')
      setChange('form')
    }, 6000)

  }

  function changeState() {
    setMutedState(0)
  }

  const src =
    "https://ia801602.us.archive.org/15/items/streetcatpreview-v-2/streetcatpreview%20-%20v2.mp4";


  switch (change) {
    case 'home':
      return (

        <Layout >

          <div className={`container ${transitionStage}`} >

            {/* <video id='vid' autoPlay muted={mutedstate}>
              <source src={src} type="video/mp4" />
            </video> */}
            <iframe className='video'
              width="100%"
              height="300px"
              src={`https://www.youtube.com/embed/6Mhradl9XIs?autoplay=1&controls=0&modestbranding=1&mute=${mutedstate}&playsinline=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Embedded youtube"
            />

            <a onClick={() => changeState()} className="text-second"><button>
              Hear the sound
            </button></a>

            <a onClick={() => setLoad()} className="text-introduction font-distres"><button>
              find out more
            </button></a>



            <img src='tim.jpg' width="125px" />
          </div>
        </Layout>
      );
    case 'form':
      return (
        <Layout>
          <div className={`container fadeIn`}>
            <div className="text-introduction font-bungee">
              INSERT ITEMS HERE ETC ETC
            </div>
            <form>



              <div className="input">
                <div className="label">
                  Email Address
                </div>
                <input
                  className="inputField"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  type="email"
                  value={email}
                />
              </div>

              <div className="input">
                <div className="label">
                  Name
                </div>
                <input
                  className="inputField"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex"
                  type="text"
                  value={name}
                />
              </div>


              <div className="input">
                <button className="submit" type="submit" value="Join Us">Join Us</button>
              </div>
            </form>
          </div>
        </Layout>
      );
    case 'loading':
      return (
        <>
          <div className="justify">
            <div className={`container ${transitionStage} justify`}>
              <div className="justify">
                <div className="progress">
                  <div className="progress-value"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
  }

}