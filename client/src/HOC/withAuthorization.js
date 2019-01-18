import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { path } from './../config';
const Authorization = WrappedComponent => {
  class WithAuthorization extends Component {
    state={}
    static getDerivedStateFromProps(newProps) {
      if (!newProps.auth.isAuthenticated) {
        newProps.history.push(path.LOGIN_PAGE);
      }
      return null;
    }
    componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        this.props.history.push(path.LOGIN_PAGE);
      } 
    }
    render(){
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
  const mapDispatchToProps = state => ({ auth: state.auth });
  const withConnect = connect(mapDispatchToProps, null);
  return compose(
    withRouter,
    withConnect
  )(WithAuthorization);
}
export default Authorization;
