import React from 'react';
import { Link } from 'react-router-dom';
// components
import RenderField from './../../components/RenderField';
import Layout from './../../components/Layout';
import Form from './../../components/Form';
import RenderAlert from './../../components/Alert';
import Button from './../../components/Button';

// import { Field } from 'redux-form';
import { path } from './../../config';
class LoginContent extends React.PureComponent {
  state = {
    error: {
      msg: ''
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push(path.POSTS_PAGE);
    }
  }
  componentWillUnmount() {
    this.props.ActSetErrors(null);
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
  render(){
    const { msg } = this.state.error;
    const { handleSubmit } = this.props;
    return(
      <Layout xs={10} sm={8} md={7} lg={5} cnCol="mx-auto" style={{ marginTop: "5rem" }}>
        <Form 
          onSubmit={handleSubmit(user => this.props.LoginUser(user))} 
          titleForm="Login"
          info={
            <React.Fragment>
              Don't have an account? Signup {'   '}
              <Link to={path.REGISTER_PAGE}>here</Link>
            </React.Fragment>
          }
        >
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
          <RenderField 
            name="email"
            id="email"
            placeholder="Email..."
          />
          <RenderField 
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
          />
          <Button type="submit" default iconButton>
            <i className="fas fa-arrow-right " />
          </Button>
        </Form>
      </Layout>
    )
  }
}

export default LoginContent;
