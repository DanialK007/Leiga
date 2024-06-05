import Fader from './Fader';
import Rotator from './Rotator';

import company1 from '../Image/company1.svg';
import company2 from '../Image/company2.svg';
import company3 from '../Image/company3.svg';
import company4 from '../Image/company4.svg';
import company5 from '../Image/company5.svg';
import company6 from '../Image/company6.svg';
import image from '../Image/liegeImg2.png';
import Button from './Button';
import Span from './Span';

const Companies = () => (
    <>
        <div className="max-w-screen-xl px-10 mx-auto py-32 flex flex-col lg:flex-row gap-8">
            {/* <Fader> */}
                <div className="lg:w-[400px] h-40 text-3xl font-semibold">
                    More than 100 companies internationally <Span>place their trust in us.</Span>
                </div>
            {/* </Fader> */}
            <div className="flex-grow h-40 grid grid-cols-3 gap-3">
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company1} alt="company1" className='h-7 w-full' />
                    </div>
                </Fader>
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company2} alt="company2" className='h-7 w-full' />
                    </div>
                </Fader>
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company3} alt="company3" className='h-7 w-full' />
                    </div>
                </Fader>
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company4} alt="company4" className='h-7 w-full' />
                    </div>
                </Fader>
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company5} alt="company5" className='h-7 w-full' />
                    </div>
                </Fader>
                <Fader>
                    <div className='py-12 px-5 bg-indigo-50'>
                        <img src={company6} alt="company6" className='h-7 w-full' />
                    </div>
                </Fader>
            </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-8 gap-y-12 max-w-screen-xl px-10 mx-auto py-20 lg:py-44'>
            {/* <Fader> */}
                <div className='flex flex-col justify-center'>
                    <div className='text-[2rem] font-semibold pb-8 lg:pb-16'>Check out our range of social media <Span>marketing options.</Span></div>
                    <Button>Learn More</Button>
                </div>
            {/* </Fader> */}
            <Rotator>
                <div className='flex items-center justify-center'>
                    <img src={image} alt="image" className='h-[320px]' />
                </div>
            </Rotator>
        </div>
    </>
)

export default Companies;