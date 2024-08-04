import { createContext, useEffect, useState } from 'react';

export const SpinnerContext = createContext({
    isLoading: false,
    setIsLoading: ()=> {},
});

export function SpinnerContextProvider(props) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const contextData = {
        isLoading,
        setIsLoading,
    };

    return (
        <SpinnerContext.Provider value={contextData}>
            {props.children}
        </SpinnerContext.Provider>
    );
}
