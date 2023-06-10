import { SocialIcon } from 'react-social-icons';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react';
import { useRouter } from 'next/router';
//...

export default function SnipMelb(src: any) {
    const [formData, setFormData] = useState({ email: '', name: '' });
    const router = useRouter();

    async function handleSubmit() {
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

    return (
        <div className="container fadeIn justify">
            <img className="map" width="400px" src='/Melbourne.png'></img>
            <ReactAudioPlayer

                src={src.src}
                autoPlay
                controls

            />
            <a href={src.src} download={src.src} target='_blank'>
                <button className="text-introduction">download</button>
            </a>

                <div className="text-introduction font-bungee no-border">
                    Join the newsletter
                </div>

                <SocialIcon url="https://discord.com/invite/M45vF6b2sE" fgColor='white' bgColor='darkgrey' />

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
                        <button className="submit" type="submit" value="Join Us" disabled={!formData.email} onClick={() => handleSubmit()}>JOIN</button>
                    </div>
                </form>

            
        </div>
    )
}