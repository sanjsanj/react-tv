import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';

import Message from './message';

const Home = ({ loadMessages, loadMembers, messages, members }) => {
  React.useEffect(() => {
    loadMessages();
    loadMembers();
  }, [loadMessages, loadMembers]);

  const findUserFromMessageUserId = userId => members.find(member => member.id === userId);

  const timeSortedMessages = messages.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));

  return (
    <ul>
      {timeSortedMessages.map(message => (
        <Message key={message.id} data={message} user={findUserFromMessageUserId(message.userId)} />
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
  members: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
      ip: PropTypes.string,
      id: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = { loadMessages, loadMembers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
