import Span from './Span';
import Fader from './Fader';

import wedo1 from '../Image/wedo1.png';
import wedo2 from '../Image/wedo2.png';
import wedo3 from '../Image/wedo3.png';

const WhatWeDo = () => (
    <>
        <div className="max-w-screen-xl px-10 mx-auto">
            <div className="text-center">
                <div className="text-5xl font-semibold">What <i>we do</i></div>
                <div className="text-2xl font-semibold py-5">Build a customer-focused <Span>business approach.</Span></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 py-16'>
                <Fader>
                <div className='bg-indigo-50/70 p-14'>
                    <div className='flex items-center justify-center me-auto w-fit rounded-full bg-white p-6'>
                    <img src={wedo1} alt="wedo1" className='h-12'/>
                    </div>
                    <div className='pt-5'>
                        <div className='text-2xl font-semibold py-2'>Strategic Planning</div>
                        <div className='text-lg'>We design beautiful and functional websites.</div>
                    </div>
                </div>
                </Fader>
                <Fader>
                <div className='bg-indigo-50/70 p-14'>
                    <div className='flex items-center justify-center me-auto w-fit rounded-full bg-white p-6'>
                    <img src={wedo2} alt="wedo2" className='h-12'/>
                    </div>
                    <div className='pt-5'>
                        <div className='text-2xl font-semibold py-2'>Market Analysis</div>
                        <div className='text-lg'>We develop beautiful and functional websites.</div>
                    </div>
                </div>
                </Fader>
                <Fader>
                <div className='bg-indigo-50/70 p-14'>
                    <div className='flex items-center justify-center me-auto w-fit rounded-full bg-white p-6'>
                    <img src={wedo3} alt="wedo3" className='h-12'/>
                    </div>
                    <div className='pt-5'>
                        <div className='text-2xl font-semibold py-2'>Leadership Development</div>
                        <div className='text-lg'>We develop beautiful and functional websites.</div>
                    </div>
                </div>
                </Fader>
            </div>
            <div className="text-center lg:pt-20">
                <div className="text-2xl lg:text-3xl font-semibold">We have analyse the data and have compelling</div>
                <div className="text-2xl lg:text-3xl font-semibold"><Span>statics to share.</Span></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-y-10 py-10 lg:py-16 text-center font-semibold'>
                <Fader>
                    <div className='text-5xl lg:text-8xl'>610+</div>
                    <div className='text-lg py-1 opacity-80 font-bold'><Span>Active monthly users</Span></div>
                </Fader>
                <Fader>
                    <div className='text-5xl lg:text-8xl'>17</div>
                    <div className='text-lg py-1 opacity-80 font-bold'><Span>Global location</Span></div>
                </Fader>
                <Fader>
                    <div className='text-5xl lg:text-8xl'>$6,8M</div>
                    <div className='text-lg py-1 opacity-80 font-bold'><Span>Funding from backers</Span></div>
                </Fader>
            </div>
        </div>
    </>
)

export default WhatWeDo;