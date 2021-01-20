const CHANGE_MESSAGES_ARRAY = 'chat/channels/CHANGE_MESSAGE_ARRAY';
const CHANGE_CHANNELS_ARRAY = 'chat/channels/CHANGE_CHANNELS_ARRAY';
const CHANNEL_NAME = 'chat/channels/CHANNEL_NAME';
const CHANGE_ACTIVE = 'chat/channels/CHANGE_ACTIVE';

const initialState = {
  currentChannelName: '#general',
  channels: [
    {
      id: 1,
      name: '#general',
      messages: [],
      active: true,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHANNELS_ARRAY: {
      return { ...state, channels: [...state.channels, action.payload] };
    }
    case CHANNEL_NAME: {
      return { ...state, currentChannelName: action.payload };
    }
    case CHANGE_ACTIVE: {
      return {
        ...state,
        channels: state.channels.map((channel) =>
          channel.name === action.payload ? { ...channel, active: true } : { ...channel, active: false },
        ),
      };
    }
    case CHANGE_MESSAGES_ARRAY: {
      return {
        ...state,
        channels: state.channels.map((channel) =>
          channel.name === state.currentChannelName
            ? { ...channel, messages: [...channel.messages, action.payload] }
            : { ...channel },
        ),
      };
    }
    default:
      return state;
  }
}

export function addMessage(objMessage) {
  return { type: CHANGE_MESSAGES_ARRAY, payload: objMessage };
}

export function addChannel(objChannel) {
  return { type: CHANGE_CHANNELS_ARRAY, payload: objChannel };
}

export function changeChannelName(name) {
  return { type: CHANNEL_NAME, payload: name };
}

export function active(name) {
  return { type: CHANGE_ACTIVE, payload: name };
}
