import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Messages.css';
import { appMessagesSelector } from '../../redux/selectors';
import { addMessageActionCreator } from '../../redux/actions';

function Messages() {
    const messages = useSelector(appMessagesSelector)
    const dispatch = useDispatch()

    const action = () => {
        dispatch(addMessageActionCreator({ messages: ["this is a message"] }))
    }

    return (
        <div className="Messages">
            <div className="Button">
                <button onClick={action}>Add message</button>
            </div>
            {messages.map(message => (
                <div className="Message">
                    {message}
                </div>
            ))}
        </div>
    );
}

export default Messages;