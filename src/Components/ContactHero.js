import BlurBack from "./BlurBack";
import Fader from "./Fader";
import image from "../Image/blog2.png"

const ContactHero = () => (
    <>
        <BlurBack>
            <div className="w-full h-full flex items-center justify-center text-center text-6xl lg:text-8xl font-semibold">
                <Fader>
                Get in<i className="ps-4">Touch</i>
                </Fader>
            </div>
        </BlurBack>
        <Fader>
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 py-10">
            <div className="flex flex-col justify-center p-10">
                <div className="text-4xl font-semibold">Get in touch</div>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="flex flex-col justify-end pt-5">
                        <div className="pb-2">Full name</div>
                        <input type="text" placeholder="John Doe" className="w-full py-3 px-5 placeholder:text-black placeholder:font-semibold border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col justify-end pt-5">
                        <div className="pb-2">Email</div>
                        <input type="text" placeholder="contact@email.com" className="w-full py-3 px-5 placeholder:text-black placeholder:font-semibold border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col justify-end pt-5">
                        <div className="pb-2">Phone</div>
                        <input type="text" placeholder="+123-456-789" className="w-full py-3 px-5 placeholder:text-black placeholder:font-semibold border-2 border-black rounded-md"/>
                    </div>
                    <div className="flex flex-col justify-end pt-5">
                        <div className="pb-2 line-clamp-1">Schedule to recieve call</div>
                        <input type="text" placeholder="10:00 AM to 4:00 PM" className="w-full py-3 px-5 placeholder:text-black placeholder:font-semibold border-2 border-black rounded-md"/>
                    </div>
                    <div className="col-span-2 pt-10">
                        <button className="py-4 rounded text-center w-full bg-black text-white">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="p-5 lg:p-10">
                <img src={image} className="w-full h-[450px] object-cover"/>
            </div>
        </div>
        </Fader>
    </>
)

export default ContactHero;