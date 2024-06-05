// import MyParallax from './MyParallax';
import Fader from './Fader';

import Span from "./Span";
import img1 from "../Image/liegeImg3.png";
import img2 from "../Image/liegeImg4.png";
import img3 from "../Image/liegeImg5.png";
import img4 from "../Image/liegeImg6.png";
import img5 from "../Image/liegeImg7.png";

const Work = () => (
    <div className="relative overflow-hidden">
        <div className="max-w-screen-xl px-10 mx-auto">
            <div className="absolute bg-cyan-400/40 h-[500px] w-[400px] lg:h-[1200px] lg:w-[1000px] blur-[120px] bottom-40 -right-40 rounded-full -z-10"></div>

            <div className="text-center font-semibold">
                <div className="text-4xl lg:text-6xl">Recent <i>work</i></div>
                <div className="text-lg lg:text-2xl py-5">Showcase of our <Span>latest endavours.</Span></div>
            </div>
            <div className="flex justify-between py-10 h-[340px] lg:h-[800px] lg:py-24">
                {/* <MyParallax></MyParallax> */}
                <div className="w-[580px] h-full">
                <Fader>
                    <img src={img1} alt="" className="w-full"/>
                </Fader>
                </div>
                <div className="w-[500px] h-full flex items-end">
                <Fader>
                    <img src={img2} alt="" className="w-full"/>
                </Fader>
                </div>
            </div>
            <div className="flex justify-between py-10 h-[340px] lg:h-[800px] lg:py-24">
                <div className="w-[450px] h-full flex items-end">
                <Fader>
                    <img src={img4} alt="" className="w-full"/>
                </Fader>
                </div>
                <div className="w-[620px] h-full">
                <Fader>
                    <img src={img3} alt="" className="w-full"/>
                </Fader>
                </div>
            </div>
            <div className="flex justify-between items-center py-10 h-[340px] lg:h-[800px] lg:p-32">
                <Fader>
                    <img src={img5} alt="" className="w-full"/>
                </Fader>
            </div>
        </div>
    </div>
)

export default Work;