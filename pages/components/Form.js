import Image from 'next/image'
import { Inter } from 'next/font/google'
import Embed from 'react-embed';
import { useEffect, useState } from 'react';
import "../../public/arrowleft.png";
import '../../public/tim.jpg'
import Layout from './layout'
import Router from 'next/router';
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter()
  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({email: '', name: ''});
  

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

  function redirect(){
    router.reload(window.location.pathname)
  }
  
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
      <>
      {/* TODO make context in index so you can go back */}
            <button className="ml-5 mt-5 fadeIn" style={{ width: 50, height: 60, color: 'white' }} onClick={() => redirect()}>------</button>
      <div className={`container fadeIn`}>
          <Layout>
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
                    onChange={(e) => setFormData((prevState) => ({ ...prevState, email: e.target.value }))}
                    placeholder="example@gmail.com"
                    type="email"
                    value={formData.email}
                    />
                </div>
  
                <div className="input">
                  <div className="label">
                    Name
                  </div>
                  <input
                    className="inputField"
                    autoFocus
                    onChange={(e) => setFormData((prevState) => ({ ...prevState, name: e.target.value }))}
                    placeholder="Alex"
                    type="text"
                    value={formData.name}
                    />
                </div>
  
  
                <div className="input">
                  {/* TODO send formdata to database */}
                  <button className="submit" type="submit" value="Join Us">Join</button>
                  <div className="text-white" onClick={() => console.log(formData)}> test </div>
                </div>
              </form>
          </Layout>
            </div>
                    </>
        )
  }
  }