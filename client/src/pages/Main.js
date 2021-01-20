import React from 'react';
import Chat from '../components/chat/Chat';
import Sidebar from '../containers/sidebar/Sidebar';

const Main = () => {
  return (
    <div className="flex max-h-screen">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Main;
