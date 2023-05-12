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

  function changeState(){
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

            <div className="video-responsive">
              <iframe className='video'
                width="500px"
                height="400xp"
                src={`https://www.youtube.com/embed/onHoYM6G3gA?autoplay=1&controls=0&modestbranding=1&mute=${mutedstate}&playsinline=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube"
                
              />
            </div>

            <button><a onClick={() => changeState()} className="text-second">
              Hear the sound
            </a></button>

            <button><a onClick={() => setLoad()} className="text-introduction">
              Find out more
            </a></button>

            

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
          </div>
        </Layout>
      );
    case 'loading':
      return (
        <Layout>
          <div className={`container ${transitionStage}`}>
            <div className="justify">
              <div className="progress">
                <div className="progress-value"></div>
              </div>
            </div>
          </div>
        </Layout>
      )
  }

}