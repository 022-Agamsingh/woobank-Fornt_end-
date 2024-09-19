import React from 'react'
import styles from '../../Style';
import { Navbar, Billing, Carddeal, Business, Clinets, Cta, Stats, Footer, Testimonials, Hero, } from './components';

const App = () => (
  <>






    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Carddeal />
          <Testimonials />
          <Clinets />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>

  </>
);


export default App
