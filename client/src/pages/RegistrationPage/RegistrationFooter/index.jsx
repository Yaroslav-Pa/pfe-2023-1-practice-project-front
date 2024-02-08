import styles from '../RegistrationPage.module.sass';
import RegistrationText from './RegistrationText';
import CONSTANTS from '../../../constants';
const {REGISTER_TEXT} = CONSTANTS;
const firstTexts = [REGISTER_TEXT[0], REGISTER_TEXT[1]];
const secondTexts = [
  REGISTER_TEXT[2],
  REGISTER_TEXT[3],
  REGISTER_TEXT[4],
  REGISTER_TEXT[5],
  REGISTER_TEXT[6],
];

const textList = (neededArr) => neededArr.map(({ theme, text }) => (
  <RegistrationText theme={theme} text={text} />
))

function RegistrationFooter() {
  return (
    <div className={styles.footer}>
      <section className={styles.articlesMainContainer}>
        <article className={styles.ColumnContainer}>
          {textList(firstTexts)}
        </article>
        <article className={styles.ColumnContainer}>
          {textList(secondTexts)}
        </article>
      </section>
    </div>
  );
}

export default RegistrationFooter;
