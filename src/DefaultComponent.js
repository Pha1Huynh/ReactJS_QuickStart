import React, { Component } from 'react';
import { connect } from 'react-redux';

class DefaultClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <></>;
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
