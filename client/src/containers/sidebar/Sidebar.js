import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/authorization';
import { changeChannelName, addChannel, active } from '../../redux/reducers/channels';
import { ReactComponent as PlusSvg } from './assets/PlusPointer.svg';

const Sidebar = () => {
  const { user } = useSelector((store) => store.authorization);
  const { channels } = useSelector((store) => store.channels);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickOnLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    return history.push('/sign-in');
  };

  const onClickOnAdd = (e) => {
    e.preventDefault();
    const channelName = prompt('Enter channel name (max. 25 characters)');
    if (channelName && channelName.length <= 25) {
      return dispatch(
        addChannel({
          id: Date.now(),
          name: `#${channelName}`,
          messages: [],
          active: false,
        }),
      );
    } return !channelName ? 0 : alert('Title exceeds 25 characters');
  };

  const onClickOnChannel = (name) => {
    dispatch(changeChannelName(name));
    dispatch(active(name));
  };

  return (
    <aside className="bg-purple-900 text-purple-lighter w-1/5 min-h-screen pb-6 hidden xl:block">
      <h1 className="text-white center text-xl mb-2 mt-3 px-4 font-sans flex justify-between font-bold">
        <span>Chat Room</span>
      </h1>
      <div className="flex justify-between items-center mb-6 px-4 cursor-pointer">
        <div className="flex items-center">
          <span className="bg-green-400 rounded-full block w-2 h-2 mr-2" />
          <span className="text-white">{user}</span>
        </div>
        <button
          type="button"
          className="bg-red-400 rounded-full py-1 px-4 outline-none shadow-inner"
          onClick={onClickOnLogout}>
          Logout
        </button>
      </div>

      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75">Channels</div>
          <div className="cursor-pointer">
            <PlusSvg onClick={onClickOnAdd} />
          </div>
        </div>
        {channels.map((channel) => {
          return (
            <div
              className={`flex flex-column py-1 px-4 mb-1 text-white font-semi-bold cursor-pointer w-full ${
                channel.active ? 'bg-teal-400' : 'hover:bg-teal-600'
              }`}
              key={channel.id}
              aria-hidden="true"
              onClick={() => onClickOnChannel(channel.name)}>
              {channel.name}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
