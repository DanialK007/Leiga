import Button from "./Button";
import Span from "./Span";
import Fader from "./Fader";

const Beta = () => (
    <>
        <div className="relative overflow-hidden py-20 lg:py-44">
            <div className="absolute -z-10 top-44 -left-64 w-[500px] h-[140px] rounded-full blur-[100px] bg-cyan-500"></div>
            <div className="absolute -z-10 bottom-44 lg:top-72 -right-96 lg:right-40 w-[700px] h-[80px] rounded-full blur-[100px] bg-fuchsia-500"></div>
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 px-10 lg:px-20 gap-y-10">
                <Fader>
                    <div className="text-4xl font-semibold">Sign up to participate in our exclusive <Span>Private Beta.</Span></div>
                    <div className="text-lg py-5">Lorem ipsum dolor sit amet, consectetur adipiscing eli spendisse</div>
                    <Button>Send a message</Button>
                </Fader>
                <div className="flex items-center flex-col gap-5">
                    <div className="rounded-s-full rounded-e-full bg-white flex ps-5">
                        <input type="text" placeholder="Enter your email" className="p-3 lg:w-[280px] font-semibold outline-none bg-transparent placeholder:text-black placeholder:font-semibold"/>
                        <button className="bg-black text-white w-16 h-16 flex items-center justify-center rounded-full">></button>
                    </div>
                    <div className="text-black/70 text-lg">Be the first in line by subscribing to us now.</div>
                </div>
            </div>
        </div>
    </>
)

export default Beta;