import React from 'react';
import PropTypes from 'prop-types';

const userAvatarAltText = user => `${user.firstName} ${user.lastName}'s avatar`;

const formattedDateTime = timestamp => new Date(timestamp).toGMTString();

const Message = ({ data, user }) => {
  const [visibility, setVisibility] = React.useState('hidden');

  const handleMouseEnter = () => setVisibility('visible');

  const handleMouseLeave = () => setVisibility('hidden');

  return (
    <li>
      {user && user.avatar && <img className="avatar" src={user.avatar} alt={userAvatarAltText(user)} />}

      <div className="message" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {data.message}
      </div>

      <div className="timestamp">{formattedDateTime(data.timestamp)}</div>

      {user && (
        <div className="email" style={{ visibility }}>
          {user.email}
        </div>
      )}
    </li>
  );
};

Message.propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string,
    ip: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default Message;
