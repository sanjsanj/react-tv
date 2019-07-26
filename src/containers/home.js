import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return <div>This is Test</div>;
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
