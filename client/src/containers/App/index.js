import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { path } from './../../config';
import { connect } from 'react-redux';
// load components
import LoadingIndicator from './../../components/LoadingIndicator';
import Layout from './../../components/Layout';
import Navbar from './../../components/Navbar';
// loading container
import LoginPage from './../Login';
import RegisterPage from './../Register';
import PostPage from './../Post';
import PostDetailPage from './../PostDetail';
// import LandingPage from './../Landing';
import UserDetailPage from './../UserDetail';
// module: decode token
import jwt_decode from 'jwt-decode';
// store
import store from './../../configureStore';
// action
import { SET_CURRENT_USER } from './../../actions/type';
import { LogoutUser } from './../../actions';
// check token
import { SetAuthToken } from './../../utils';

if (localStorage.getItem('jwtToken')) {
  const tokenInLocal = localStorage.getItem('jwtToken');
  SetAuthToken(tokenInLocal);
  const decoded = jwt_decode(tokenInLocal);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  })
  const currentTime = Date.now() / 1000;
  if (currentTime > decoded.exp) {
    store.dispatch(LogoutUser());
    window.location.href = path.LOGIN_PAGE;
  }
}
class App extends Component {
  render(){
    return (
      <Suspense fallback={<LoadingIndicator middle />}>
        <Router>
          <React.Fragment>
            { this.props.auth.isAuthenticated && <Navbar />}
            <Layout xs={12} md={10} cnCol="mx-auto">
              <Switch>
                <LoginPage exact path={path.LOGIN_PAGE} />
                <RegisterPage exact path={path.REGISTER_PAGE} />
                <PostPage exact path={path.POSTS_PAGE} />
                <PostDetailPage exact path={path.POST_DETAIL_PAGE} />
                <UserDetailPage exact path={path.PROFILE_PAGE} />
                <Redirect to={path.POSTS_PAGE} />
              </Switch>
            </Layout>
          </React.Fragment>
        </Router>
      </Suspense>
        
    )
  }
}

export default connect(state => ({ auth: state.auth }))(App);