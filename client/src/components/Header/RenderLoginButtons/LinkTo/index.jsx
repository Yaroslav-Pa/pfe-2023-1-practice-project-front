import { Link } from 'react-router-dom';
import styles from '../RenderLoginButtons.module.sass';
function LinkTo({ text, to, isButton = false }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <span className={isButton ? styles.btn : ''}>{text}</span>
    </Link>
  );
}

export default LinkTo;
