import Image from 'next/image'
import { Inter } from 'next/font/google'
import Embed from 'react-embed';
import { useEffect, useState } from 'react';
import "../public/arrowleft.png";
import '../public/tim.jpg'
import Layout from './layout'
import Router from 'next/router';
const inter = Inter({ subsets: ['latin'] })
import dynamic from 'next/dynamic'
import { SocialIcon } from 'react-social-icons';
import {useRouter} from 'next/router'
import { redirect } from 'next/navigation';

const AblyChatComponent = dynamic(() => import('./AblyChatComponent'), { ssr: false });


export default function Form({ setShowForm }) {

  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ email: '', name: '' });
  const router = useRouter();

  async function handleSubmit(e) {
        const data = {
            email: formData.email,
            name: formData.name,
        };
        await fetch("api/createUser", {
            method: "POST",
            body: JSON.stringify(data)
        })
        // Router.push('/home')
}


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

  if (loading) {
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
  } else {

    return (
      <>
        <img className="ml-5 mt-5 fadeIn cursor-pointer" src='arrowleft.png' style={{ width: 50, height: 60 }} onClick={() => setShowForm(false)} />
        <div className='container fadeIn justify'>
          <div className="text-introduction font-bungee no-border">
            Join the newsletter
          </div>

          <form action="/home"> 
            <div className="input">
              <div className="label">
                Email Address
              </div>
              <input
                className="inputField"
                autoFocus
                onChange={(e) => setFormData((prevState) => ({ ...prevState, email: e.target.value }))}
                placeholder="Enter your email"
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
                placeholder="Enter your name"
                type="text"
                value={formData.name}
              />
            </div>


            <div className="input">
              <button className="submit" type="submit" value="Join Us" disabled={!formData.email} onClick={()=>handleSubmit()}>JOIN</button>
            </div>
          </form>

          <SocialIcon url="https://discord.com/invite/M45vF6b2sE"  className="icon" fgColor='white' bgColor='grey'/>
        </div>
      </>
    )

  }
}