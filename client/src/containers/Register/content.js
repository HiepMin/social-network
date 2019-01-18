import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components
import InputField from './../../components/InputField';
import Layout from './../../components/Layout';
import Form from './../../components/Form';
import RenderAlert from './../../components/Alert';
import Button from './../../components/Button';

import { Field } from 'redux-form';
import { path } from './../../config';
class RegisterContent extends Component {
  state={
    error: {
      msg: ''
    }
  }
  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push(path.POSTS_PAGE);
    }
  }
  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.auth.isAuthenticated) {
      newProps.history.push(path.POSTS_PAGE);
    }
    if (newProps.error && newProps.error !== oldState.error) {
      return { error: newProps.error }
    }
    return null;
  }
  componentWillUnmount(){
    this.props.ActSetErrors();
  }
  render(){
    const { handleSubmit } = this.props;
    const { msg } = this.state.error;
    return (
      <Layout xs={10} sm={8} md={7} lg={5} cnCol="mx-auto" style={{ marginTop: "5rem" }}>
        <Form 
          onSubmit={handleSubmit(user => this.props.RegisterUser(user, this.props.history, path.LOGIN_PAGE))} 
          titleForm="Register"
          note="* = required"
          info={
            <React.Fragment>
              Already have an account? Login {'   '}
              <Link to={path.LOGIN_PAGE}>here</Link>
            </React.Fragment>
          }>
          { 
            msg ? 
            <RenderAlert 
              style={{ 
                marginTop: 0,
                fontSize: 11,
                textAlign: "center", 
              }} 
              block="true"
              color="danger" 
              mb="1rem"
              error={msg} /> 
            : '' 
          }
          <Field 
            component={InputField}
            name="email"
            id="email"
            placeholder="Email...*"
            // processing={requesting && doWhat && doWhat === 'register user'}
          />
          <Field 
            name="username"
            component={InputField}
            id="username"
            placeholder="Username...*"
          />
          <Field 
            type="password"
            name="password"
            component={InputField}
            id="password"
            placeholder="Password...*"
          />
          <Field 
            type="password"
            component={InputField}
            name="passConfirm"
            id="passConfirm"
            placeholder="Confirm password...*"
          />
          <Button type="submit" default iconButton>
            <i className="fas fa-arrow-right " />
          </Button>
        </Form>
      </Layout>
    )
  }
}

export default RegisterContent;