import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import HeaderSignUp from '../../components/HeaderSignUp';
import RegistrationFooter from './RegistrationFooter';

const RegistrationPage = (props) => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <HeaderSignUp text="Login" toLink="/login" />
        <RegistrationForm history={props.history} />
      </div>
      <RegistrationFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
