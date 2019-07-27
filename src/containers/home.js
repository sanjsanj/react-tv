import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';

import Message from './message';

const Home = ({ loadMessages, loadMembers, messages }) => {
  React.useEffect(() => {
    loadMessages();
    loadMembers();
  }, [loadMessages, loadMembers]);

  return (
    <ul>
      {messages.map(message => (
        <Message key={message.id} data={message} />
      ))}
    </ul>
  );
};

Home.propTypes = {
  loadMessages: PropTypes.func.isRequired,
  loadMembers: PropTypes.func.isRequired,
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

const mapDispatchToProps = { loadMessages, loadMembers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
