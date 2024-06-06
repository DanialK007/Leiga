import img1 from '../Image/twitter.png';
import img2 from '../Image/instagram.png';
import img3 from '../Image/linkedin.png';
import img4 from '../Image/dribble.png';

const Footer = () => (
    <>
        <div className="py-10">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-4 p-10">
                    <div className="col-span-3">
                        <div className="uppercase font-semibold border-2 border-black rounded-s-full rounded-e-full me-auto inline-block py-2 px-4">Vist us</div>
                        <div className="grid lg:grid-cols-3 gap-10 pe-32 py-10">
                            <div className="">
                                <div className="border-b-2 border-black inline-block font-semibold">New York</div>
                                <div className="text-lg mt-5">123 Broadway Street, Suite 16, New York, NY</div>
                            </div>
                            <div className="">
                                <div className="border-b-2 border-black inline-block font-semibold">San Francisco</div>
                                <div className="text-lg mt-5">789 Market Street, Floor 3, San Francisco, CA</div>
                            </div>
                            <div className="">
                                <div className="border-b-2 border-black inline-block font-semibold">Paris</div>
                                <div className="text-lg mt-5">12 Rue de la Paix, 75002 Paris, France</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="uppercase font-semibold border-2 border-black rounded-s-full rounded-e-full me-auto inline-block py-2 px-4">Stay in touch</div>
                        <div className="border-b-2 border-black text-[1.1rem] font-semibold opacity-70 me-auto py-1 mt-5">+959 255 599 863</div>
                        <div className="border-b-2 border-black text-[1.1rem] font-semibold opacity-70 me-auto py-1">kaungkhantkyawdk@gmail.com</div>
                        <div className="flex py-5 gap-3">
                            <div className="p-2 group hover:scale-105 cursor-pointer rounded-full bg-indigo-50/70">
                                <img src={img1} className='w-4 group-hover:scale-75' alt=''/>
                            </div>
                            <div className="p-2 group hover:scale-105 cursor-pointer rounded-full bg-indigo-50/70">
                                <img src={img2} className='w-4 group-hover:scale-75' alt=''/>
                            </div>
                            <div className="p-2 group hover:scale-105 cursor-pointer rounded-full bg-indigo-50/70">
                                <img src={img3} className='w-4 group-hover:scale-75' alt=''/>
                            </div>
                            <div className="p-2 group hover:scale-105 cursor-pointer rounded-full bg-indigo-50/70">
                                <img src={img4} className='w-4 group-hover:scale-75' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='px-10 font-semibold flex justify-between items-center'>
                <div className='text-sm'>© 2024 - All rights reserved. Design by Flowmance. Code by Danial.</div>
                <div className='text-lg'>Leiga.Inc</div>
            </div>
            </div>
        </div>
    </>
)

export default Footer;