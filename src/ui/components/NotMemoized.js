import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './NotMemoized.css';
import { notMemoizedNotMeaningfulSelector } from '../../redux/selectors';

function NotMemoized() {
    const [count, setCount] = useState(0);
    const messages = useSelector(notMemoizedNotMeaningfulSelector)

    useEffect(() => {
        setCount(count + 1);
    }, [messages])

    return (
        <div className="NotMemoized">
            Renders: {count}
        </div>
    );
}

export default NotMemoized;