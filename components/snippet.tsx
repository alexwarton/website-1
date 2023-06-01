import { SocialIcon } from 'react-social-icons';
import ReactAudioPlayer from 'react-audio-player';
//...

export default function Snippet(src: any) {
    return (
        <div className="container fadeIn justify">
            <ReactAudioPlayer

                src={src.src}
                autoPlay
                controls

            />
            <a href={src.src} download="snip1" target='_blank'>
                <button className="text-introduction">download</button>
            </a>

            <SocialIcon url="https://discord.com/invite/M45vF6b2sE" fgColor='white' bgColor='darkgrey'/>
        </div>
    )
}