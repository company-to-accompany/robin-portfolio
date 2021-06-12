import React, { useEffect, useState } from 'react'

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        console.log('use effect called');
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', updateWindowSize);
        updateWindowSize();

        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);
    return [windowSize];
}
