import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import Embed from 'react-embed';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [change, setChange] = useState('home');
  const [transitionStage, setTransitionStage] = useState('fadeIn')

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


  switch (change) {
    case 'home':
      return (
        <Layout>
          <div className={`container ${transitionStage}`}>

            <div className="text-container">
              <div className="text-introduction font-bungee">
                LIMITLINE
              </div>
              <button onClick={() => setLoad()}>Find Out More</button>
            </div>

            {/* <div className="video-responsive">
              <iframe className='video'
                height="340px"
                width="600px"
                src={`https://www.youtube.com/embed/Way9Dexny3w?controls=0&modestbranding=1 `}
                title="Embedded youtube"
    
              />
            </div> */}
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

            <div className="progress">
              <div className="progress-value"></div>
            </div>
          </div>
        </Layout>
      )
  }

}
