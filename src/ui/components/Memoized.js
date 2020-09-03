import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Memoized.css';
import { memoizedNotMeaningfulSelector } from '../../redux/selectors';

function Memoized() {
    const [count, setCount] = useState(0);
    const messages = useSelector(memoizedNotMeaningfulSelector)

    useEffect(() => {
        setCount(count + 1);
    }, [messages])

    return (
        <div className="Memoized">
            Renders: {count}
        </div>
    );
}

export default Memoized;