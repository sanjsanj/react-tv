import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ data }) => {
  return (
    <li>
      <div className="message">{data.message}</div>

      <div className="email">user email</div>
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
