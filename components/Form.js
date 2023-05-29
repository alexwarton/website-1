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

const AblyChatComponent = dynamic(() => import('./AblyChatComponent'), { ssr: false });


export default function Form({ setShowForm }) {

  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ email: '', name: '' });

  async function handleSubmit(e) {
    const postData = async () => {
        const data = {
            email: formData.email,
            name: formData.name,
        };
        const response = await fetch("api/createUser", {
            method: "POST",
            body: JSON.stringify(data)
        })
        if (response.status === 200) {
            console.log("successsss")
        } else {
            console.log("failure")
        }
    }
    postData();

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
          <div className="text-introduction font-bungee">
            Join the newsletter
          </div>

          <form onSubmit={()=>handleSubmit()}> 
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
              <button className="submit" type="submit" value="Join Us">JOIN</button>
              {/* <div className="text-white" onClick={() => console.log(formData)}> test </div> */}
            </div>
          </form>

          <SocialIcon url="https://discord.com" className="icon" fgColor='white'/>
        </div>
      </>
    )

  }
}