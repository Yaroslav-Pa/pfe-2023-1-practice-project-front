import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import styles from './LoginPage.module.sass';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import HeaderSignUp from '../../components/HeaderSignUp';

const LoginPage = (props) => (
  <div className={styles.mainContainer}>
    <div className={styles.loginContainer}>
      <HeaderSignUp text="Signup" toLink="/registration" />
      <div className={styles.loginFormContainer}>
        <LoginForm history={props.history} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
