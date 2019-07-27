import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../action-creators/messages';

const Home = ({ loadMessages, messages }) => {
  React.useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  return (
    <ul>
      {messages.map(m => (
        <li key={m.id}>{m.message}</li>
      ))}
    </ul>
  );
};

Home.propTypes = {
  loadMessages: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => ({ messages: state.messages });

const mapDispatchToProps = { loadMessages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
