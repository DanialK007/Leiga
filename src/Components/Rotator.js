import useIntersectionObserver from './useIntersectionObserver.js';
import observer from '../Components/Rotator.module.css';

const Rotator = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${observer.Rotator} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default Rotator;