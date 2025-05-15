import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.customFooter}>
      <p className={styles.footerText}>© 2025 Mitt Företag. Alla rättigheter förbehållna.</p>
    </footer>
  );
}

export default Footer;