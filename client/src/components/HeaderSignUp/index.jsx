import styles from './LoginPage.module.sass';
import CONSTANTS from '../../constants';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function HeaderSignUp({text, toLink}) {
  return (
    <div className={styles.headerSignUpPage}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
      <Link to={toLink} style={{ textDecoration: 'none' }}>
        <div className={styles.linkLoginContainer}>
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderSignUp;
