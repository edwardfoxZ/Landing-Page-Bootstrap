import { useState } from 'react';


export const useINputValues = () => {
    const [inputVal, setInputVal] = useState('');

    return [inputVal, setInputVal];
};