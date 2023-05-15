import Image from 'next/image'
import { Inter } from 'next/font/google'
import Embed from 'react-embed';
import { useEffect, useState } from 'react';
// import '../public/tim.jpg'
import Layout from './layout'

const inter = Inter({ subsets: ['latin'] })

export default function Form() {
  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   // setTransitionStage('fadeOut')

    setTimeout(function () {
      setTransitionStage('fadeIn')
      setLoading(false);
    }, 4000)

    setTimeout(function () {
      setTransitionStage('fadeOut')
    }, 5000
    )
  });
  
  if(loading){
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
  }else{

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
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    type="email"
                    // value={email}
                  />
                </div>
  
                <div className="input">
                  <div className="label">
                    Name
                  </div>
                  <input
                    className="inputField"
                    autoFocus
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Alex"
                    type="text"
                    // value={name}
                  />
                </div>
  
  
                <div className="input">
                  <button className="submit" type="submit" value="Join Us">Join Us</button>
                </div>
              </form>
            </div>
          </Layout>
        )
  }
  }
