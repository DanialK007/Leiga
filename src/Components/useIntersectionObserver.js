import { Children, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasIntersectedOnce, setHasIntersectedOnce] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // use this to animate all time
            // setIsVisible(entry.isIntersecting);
            if (!hasIntersectedOnce && entry.isIntersecting) {
                setIsVisible(true);
                setHasIntersectedOnce(true); // Set hasIntersectedOnce to true after the first intersection
                observer.unobserve(entry.target); // Stop observing the target element
            }
        }, options);

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [containerRef, isVisible];
};

export default useIntersectionObserver;

// const CardWrapper = ({children}) => {
//     const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

//     return (
//         {children}
//     );
// };

// export default CardWrapper;