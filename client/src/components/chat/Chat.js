import React from 'react';
import Topbar from './Topbar';
import { InputChat } from '../../containers/chat/InputChat';
import ChannelMessages from '../../containers/chat/ChannelMessages';

const Chat = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <Topbar />
      <div className="px-6 py-4 flex-1 overflow-y-auto max-h-full md:max-h-full">
        <ChannelMessages />
      </div>
      <div className="flex m-6 rounded-lg border-2 border-grey">
        <InputChat />
      </div>
    </div>
  );
};

export default Chat;
