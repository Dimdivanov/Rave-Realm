import { useRef, useEffect } from 'react';

function useFocusForm() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return ref;
}
export default useFocusForm;
