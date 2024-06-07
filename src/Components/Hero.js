import Rotator from './Rotator';
import Fader from './Fader';

import heroImg from '../Image/liegeImg1.png';
import Button from './Button';
import Span from './Span';

const Hero = () => (
    <Fader>
    <h1 className="min-h-screen relative overflow-hidden">
        <div className="absolute -left-96 bottom-40 h-[300px] w-[800px] rounded-[50%] blur-[80px] rotate-[20deg] bg-cyan-300 opacity-80"></div>
        <div className="absolute right-20 bottom-40 h-[300px] w-[600px] rounded-[50%] blur-[100px] rotate-[20deg] bg-purple-300 opacity-80"></div>

        <div className="absolute w-full min-h-screen z-10">
            <div className='max-w-screen-xl py-14 px-10 mx-auto grid lg:grid-cols-2 h-full'>
                <div className="flex items-center justify-center flex-col py-10 gap-y-5 lg:gap-10 pe-10 introFade">
                    <div className="text-3xl lg:text-6xl font-semibold pt-16">The <i className=''>Web based </i> marketing agency.</div>
                    <div className="text-xl lg:text-[1.6rem] font-semibold lg:pt-8">We build comprehensive digital solutions to efficiently <Span>manage and improve sales funnels.</Span></div>
                    <div className='flex justify-start w-full'>
                    <Button>Send a message</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:pt-20">
                    {/* <img src={heroImg} alt='Image' className="h-[500px] w-[500px] introAnimation" /> */}
                    <Rotator>
                        <div className='flex items-center justify-center'>
                        <img src={heroImg} alt='Image' className="w-full introAnimation" />
                        </div>
                    </Rotator>
                </div>
            </div>
        </div>
    </h1>
    </Fader>
)

export default Hero;