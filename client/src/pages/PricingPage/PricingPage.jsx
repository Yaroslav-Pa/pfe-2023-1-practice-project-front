import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PricingColumn from '../../components/PricingColumn/PricingColumn';
import styles from './PricingPage.module.sass';
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
          <section className={styles.pricingArea}>
            <PricingColumn
              headColor='rgb(101, 101, 101)'
              headerBlock={[
                'Platinum',
                'Work with top-level creatives, plus agency-style brand validation',
                '749',
              ]}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PricingPage;
