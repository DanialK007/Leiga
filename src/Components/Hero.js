import Rotator from './Rotator';
import Fader from './Fader';

import heroImg from '../Image/liegeImg1.png';
import Button from './Button';
import Span from './Span';

const Hero = () => (
    <Fader>
    <h1 className="h-screen relative overflow-hidden">
        <div className="absolute -left-96 bottom-40 h-[300px] w-[800px] rounded-[50%] blur-[80px] rotate-[20deg] bg-cyan-300 opacity-80"></div>
        <div className="absolute right-20 bottom-40 h-[300px] w-[600px] rounded-[50%] blur-[100px] rotate-[20deg] bg-purple-300 opacity-80"></div>

        <div className="absolute w-full h-full z-10 grid grid-cols-2 lg:px-40">
            <div className="flex items-center justify-center flex-col gap-10 pe-10 introFade">
                <div className="text-6xl font-semibold">The <i className=''>Web based </i> marketing agency.</div>
                <div className="text-[1.6rem] font-semibold pt-8">We build comprehensive digital solutions to efficiently <Span>manage and improve sales funnels.</Span></div>
                <Button>Send a message</Button>
            </div>
            <div className="flex items-center justify-center">
                {/* <img src={heroImg} alt='Image' className="h-[500px] w-[500px] introAnimation" /> */}
                <Rotator>
                    <div className='flex items-center justify-center'>
                    <img src={heroImg} alt='Image' className="w-full introAnimation" />
                    </div>
                </Rotator>
            </div>
        </div>
    </h1>
    </Fader>
)

export default Hero;