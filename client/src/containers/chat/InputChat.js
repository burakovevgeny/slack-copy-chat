import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/reducers/channels';
import avatar from './assets/no-avatar.png';

export const InputChat = () => {
  const { user } = useSelector((store) => store.authorization);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && value === '') {
      e.preventDefault();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(
        addMessage({
          id: Date.now(),
          name: user,
          time: new Date().toUTCString(),
          message: `${value}`,
          avatar,
        }),
      );
      setValue('');
    }
  };

  return (
    <input
      type="text"
      className="w-full p-4 focus:outline-none focus:ring focus:ring-teal-300"
      placeholder="Message to #general"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
