import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PricingColumn from '../../components/PricingColumn/PricingColumn';
import styles from './PricingPage.module.sass';
import CONSTANTS from '../../constants';
const { PRICING_COLUMNS } = CONSTANTS;

function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.containerHeader}>
          <div className={styles.pricingHeader}>
            <h2>Pricing for </h2>
            <select name='headerSelect' className={styles.headerSelect}>
              <option value='Name'>Name</option>
              <option value='Logo'>Logo</option>
              <option value='Tagline'>Tagline</option>
            </select>
          </div>
        </section>
        <div className={styles.containerPricingArea}>
            {PRICING_COLUMNS.map(
              ({
                headColor,
                headerBlock,
                infoAboutPack = [],
                infoText = '',
              }) => (
                <PricingColumn
                  headColor={headColor}
                  headerBlock={headerBlock}
                  infoAboutPack={infoAboutPack}
                  infoText={infoText}
                />
              )
            )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PricingPage;
