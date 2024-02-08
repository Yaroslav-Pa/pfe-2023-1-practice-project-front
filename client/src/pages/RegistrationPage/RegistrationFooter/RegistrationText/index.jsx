import styles from '../../RegistrationPage.module.sass';

function RegistrationText({ theme, text }) {
  return (
    <>
      <h1 className={styles.headerArticle}>{theme}</h1>
      <p className={styles.article}>{text}</p>
    </>
  );
}

export default RegistrationText;
