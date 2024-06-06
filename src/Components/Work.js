import MyParallax from './MyParallax';
import Fader from './Fader';

import Span from "./Span";
import img1 from "../Image/liegeImg3.png";
import img2 from "../Image/liegeImg4.png";
import img3 from "../Image/liegeImg5.png";
import img4 from "../Image/liegeImg6.png";
import img5 from "../Image/liegeImg7.png";

const Work = () => (
    <div className="relative overflow-hidden">
        <div className="max-w-screen-xl px-5 lg:px-10 mx-auto">
            <div className="absolute bg-cyan-400/40 h-[500px] w-[400px] lg:h-[1200px] lg:w-[1000px] blur-[120px] bottom-40 -right-40 rounded-full -z-10"></div>

            <div className="text-center font-semibold">
                <div className="text-4xl lg:text-6xl">Recent <i>work</i></div>
                <div className="text-lg lg:text-2xl py-5">Showcase of our <Span>latest endavours.</Span></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between py-10 h-[600px] lg:h-[800px] lg:py-24">
                <div className="h-[200px] lg:w-[580px] lg:h-full">
                    <Fader>
                        <MyParallax image={img1} className="w-[280px] h-[200px] lg:w-[580px] lg:h-[400px]">
                            <div className='w-full h-[200px] lg:h-[400px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white lg:text-6xl flex items-center justify-center z-20'>
                                Colourfull Journey
                            </div>
                        </MyParallax>
                    </Fader>
                </div>
                <div className="h-[200px] lg:w-[500px] lg:h-full flex justify-end lg:items-end">
                    <Fader>
                        <MyParallax image={img2} className="w-[300px] h-[300px] lg:w-[580px] lg:h-[400px]">
                            <div className='w-full h-[300px] lg:h-[400px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white lg:text-6xl flex items-center justify-center z-20'>
                                Dreamy Visions
                            </div>
                        </MyParallax>
                    </Fader>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between h-[700px] lg:h-[800px] py-24">
                <div className="h-[200px] lg:w-[450px] lg:h-full lg:flex items-end">
                    <Fader>
                        <MyParallax image={img4} className="h-[200px] w-[300px] lg:w-[460px] lg:h-[400px]">
                            <div className='w-full h-[200px] lg:h-[300px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white lg:text-5xl flex items-center justify-center z-20'>
                            Imiginary Realms
                            </div>
                        </MyParallax>
                    </Fader>
                </div>
                <div className=" h-[200px] lg:w-[620px] lg:h-full flex justify-end lg:block">
                    <Fader>
                        <MyParallax image={img3} className="h-[200px] w-[300px] lg:w-[650px] lg:h-[420px]">
                            <div className='w-full h-[200px] lg:h-[420px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white lg:text-6xl flex items-center justify-center z-20'>
                                Playful Strokes
                            </div>
                        </MyParallax>
                    </Fader>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-10 h-[400px] lg:h-[340px] lg:lg:h-[800px] lg:p-32">
                <Fader>
                    <MyParallax image={img5} className="w-[320px] h-[300px] lg:w-[1000px] lg:h-[600px]">
                        <div className='w-full h-[300px] lg:h-[600px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white lg:text-8xl flex items-center justify-center z-20'>
                            Whimsy Tales
                        </div>
                    </MyParallax>
                </Fader>
            </div>
        </div>
    </div>
)

export default Work;