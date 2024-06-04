import Span from './Span';
import Fader from './Fader';

import wedo1 from '../Image/wedo1.png';
import wedo2 from '../Image/wedo2.png';
import wedo3 from '../Image/wedo3.png';

const WhatWeDo = () => (
    <>
        <div className="lg:px-40">
            <div className="text-center">
                <div className="text-5xl font-semibold">What we do</div>
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
        </div>
    </>
)

export default WhatWeDo;