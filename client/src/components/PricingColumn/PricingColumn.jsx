import styles from './PricingColumn.module.sass';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

function PricingColumn({
  headColor,
  headerBlock,
  infoAboutPack = [],
  infoText = '',
}) {
  const [blockH1, blockText, blockPrice] = headerBlock;
  const [prizeToWinner, listedUpgrades, entries, isRefund] = infoAboutPack;

  const upgradeTextList = listedUpgrades?.textList.map((text) => (
    <li className={styles.infoListText}>
      <FaCheck /> {text}
    </li>
  ));
  const slisedTextList = infoText
    .split('.')
    .map((text) => <p className={styles.slisedInfoText}>{text}</p>);

  return (
    <article className={styles.articleContainer}>
      <div
        className={styles.colorBlock}
        style={{ borderColor: `${headColor}` }}
      >
        <h1 className={styles.headerH1} style={{ color: `${headColor}` }}>
          {blockH1}
        </h1>
        <p className={styles.headerText}>{blockText}</p>
        <p className={styles.priceBlock}>US${blockPrice}</p>
      </div>
      <div className={styles.infoPackContainer}>
        {listedUpgrades && !infoText && (
          <>
            <p className={styles.packPrizeText}>
              Prize to Winer - ${prizeToWinner} (Included)
            </p>
            <div className={styles.packUpgradesContainer}>
              <h2>
                Validation Services & Upgrades (${listedUpgrades?.upgradesValue}{' '}
                value)
              </h2>
              <ul className={styles.packListedUpgrades}>{upgradeTextList}</ul>
            </div>
            <p className={styles.packExpectedText}>
              Expected {entries}+ Entries
            </p>
            {isRefund && (
              <p className={styles.packRefundText}>Partial Refund Option</p>
            )}
          </>
        )}
        {infoText && (
          <div className={styles.infoTextContainer}>{slisedTextList}</div>
        )}
      </div>
      <Link
        className={styles.pseudoButton}
        style={{ backgroundColor: `${headColor}` }}
      >
        <FaCheck /> Start
      </Link>
    </article>
  );
}

export default PricingColumn;
