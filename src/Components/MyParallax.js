import { Parallax, Background } from 'react-parallax';


const MyParallax = ({children, image, className}) => (
    <Parallax strength={50} className={className}>
        <Background className={className}>
            <img src={image} alt='' className='w-full h-full object-cover scale-110'/>    
        </Background>
        {children}
    </Parallax>
)

export default MyParallax;