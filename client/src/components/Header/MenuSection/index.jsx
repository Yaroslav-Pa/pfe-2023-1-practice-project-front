import styles from '../Header.module.sass';
import CONSTANTS from '../../../constants';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function MenuSection({ menuName, pagesList }) {
  return (
    <li>
      <span>{menuName.toUpperCase()}</span>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
      <ul>
        {pagesList.map(({ url, name }, index) => (
          <Link to={url} className={styles.menuLink} key={name}>
            <li
              className={
                styles.listForMenu +
                (index === pagesList.length - 1 ? ` ${styles.last}` : '')
              }
            >
              {name.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </li>
  );
}

export default MenuSection;
