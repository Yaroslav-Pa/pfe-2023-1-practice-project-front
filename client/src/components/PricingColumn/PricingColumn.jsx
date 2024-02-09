import styles from './PricingColumn.module.sass';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

function PricingColumn({ headColor, headerBlock, pack, infoText}) {
  const [blockH1, blockText, blockPrice] = headerBlock;
  const [prizeToWinner, listUpgrades, entries, isRefund] = pack;
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
      <div className={styles.infoText}>
        {pack && <div>
          <p>Prize to Winer - ${prizeToWinner} (Included)</p>
          <div>
            <h2>Validation Services & Upgrades ({listUpgrades.value} value)</h2>
            <ul>
              {listUpgrades.map(({ text }) => (
                <li>
                  <FaCheck /> {text}
                </li>
              ))}
            </ul>
          </div>
          <p>Expected {entries}+ Entries</p>
          {isRefund && <p>Partial Refund Option</p>}
        </div>}
        {/* TODO можливо потім зробити щоб воно по . слайсило та потім розтавляло */}
        {infoText && <p>{infoText}</p>}

        <Link
          className={styles.pseudoButton}
          style={{ backgroundColor: `${headColor}` }}
        >
          <FaCheck /> Start
        </Link>
      </div>
    </article>
  );
}

export default PricingColumn;
