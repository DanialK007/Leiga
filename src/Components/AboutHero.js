import BlurBack from "../Components/BlurBack";
import Button from "../Components/Button";
import image from "../Image/blog2.png";
import Fader from "../Components/Fader";

const AboutHero = () => (
    <>
        <BlurBack>
            <div className="w-full h-full flex items-center justify-center text-center text-6xl lg:text-8xl font-semibold">
                <Fader>
                About <i>Us</i>
                </Fader>
            </div>
        </BlurBack>
        <div className="max-w-screen-xl mx-auto px-10">
            <Fader>
            <img src={image} className="w-full" />
            </Fader>
            <div className="text-center max-w-screen-md mx-auto lg:px-10 py-10 lg:py-20">
                <Fader>
                    <div className="text-4xl font-semibold ">About Us</div>
                    <div className="text-2xl font-semibold opacity-80 pt-8">Kebora and John Smith, the visionary founders behind Leiga, were struck by a realization — the world was lacking creativity; an absence of design aesthetics, a play — it — safe approach by brands, and a dire need for innovation and beauty.</div>
                </Fader>
                <Fader>
                    <div className="text-2xl font-semibold text-zinc-500 pt-8">Thankfully, armed with their experience from the world of independent film, they were ready to take on this challenge with a tenacious, can — do mindset, celebrating and amplifying the uniqueness of each narrative. This ethos now propels Leiga forward as a design studio dedicated to creativity and individuality in a world craving its presence.</div>
                </Fader>
                <div className="flex justify-center items-center py-8">
                    <Button>Join Us</Button>
                </div>
            </div>
        </div>
    </>
)

export default AboutHero;