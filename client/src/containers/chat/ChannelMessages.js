import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ChannelMessages = () => {
  const { currentChannelName, channels } = useSelector((store) => store.channels);
  const messages = channels.reduce((acc, rec) => (rec.name === currentChannelName ? rec.messages : acc), []);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <>
      {messages
        ? messages.map((user) => {
            return (
              <div className="flex items-center mb-4" key={user.id}>
                <img src={user.avatar} className="w-10 h-10 rounded mr-3" alt="avatar" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-bold text-md mr-2 font-sans">{user.name}</span>
                    <small className="text-grey text-xs font-light">{user.time}</small>
                  </div>
                  <p className="font-light text-md text-grey-darkest">{user.message}</p>
                </div>
              </div>
            );
          })
        : null}
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChannelMessages;
