import React from 'react';
import { useSelector } from 'react-redux';

const Topbar = () => {
  const { currentChannelName } = useSelector((store) => store.channels);
  return (
    <div className="border-b flex px-6 py-2 items-center">
      <div className="flex flex-col">
        <h3 className="text-grey-darkest text-md mb-1 font-extrabold">{currentChannelName}</h3>
      </div>
    </div>
  );
};

export default Topbar;
