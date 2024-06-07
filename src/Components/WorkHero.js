import BlurBack from "./BlurBack";
import MyParallax from "./MyParallax";
import Fader from "./Fader";
import img1 from "../Image/liegeImg3.png";
import img2 from "../Image/liegeImg4.png";
import img3 from "../Image/liegeImg5.png";
import img4 from "../Image/liegeImg6.png";
import img5 from "../Image/liegeImg7.png";
import img6 from "../Image/liegeImg8.png";

const images = [
    {
        image : img1,
        title : "Colorful Journey"
    },
    {
        image : img2,
        title : "Dreamy Vision"
    },
    {
        image : img3,
        title : "Playful Strokes"
    },
    {
        image : img4,
        title : "Imiginary Realms"
    },
    {
        image : img5,
        title : "Whimsy Tales"
    },
    {
        image : img6,
        title : "Night Desert"
    }
]

const WorkHero = () => (
    <>
        <BlurBack>
            <div className="w-full h-full flex items-center justify-center text-center text-6xl lg:text-8xl font-semibold">
                <Fader>
                Latest <i>Work</i>
                </Fader>
            </div>
        </BlurBack>
        <div className="max-w-screen-xl mx-auto px-5 flex items-center justify-center lg:px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-5">
                {
                    images.map((work, index) => (
                        <div key={index} className="">
                        <Fader>
                            <MyParallax image={work.image} className="w-[90vw] h-[300px] lg:w-[580px] lg:h-[400px]">
                                {/* <img src={image} alt="" /> */}
                                <div className='w-full h-[300px] lg:h-[400px] absolute top-0 right-0 opacity-0 hover:opacity-100 duration-300 font-semibold text-white text-4xl lg:text-6xl flex items-center justify-center z-20'>
                                    {work.title}
                                </div>
                            </MyParallax>
                        </Fader>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
)

export default WorkHero;