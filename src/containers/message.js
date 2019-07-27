import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ data }) => {
  const [visibility, setVisibility] = React.useState('hidden');

  const handleMouseEnter = () => setVisibility('visible');

  const handleMouseLeave = () => setVisibility('hidden');

  return (
    <li>
      <div className="message" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {data.message}
      </div>

      <div className="email" style={{ visibility }}>
        user email
      </div>
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
};

export default Message;
