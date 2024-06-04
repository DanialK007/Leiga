import useIntersectionObserver from './useIntersectionObserver.js';
import observer from '../Components/Fader.module.css';

const CardWrapper = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${observer.CardWrapper} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default CardWrapper;