import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.customFooter}>
      <p className={styles.footerText}>© 2025 Simonsen. Alla rättigheter förbehållna.</p>
    </footer>
  );
}

export default Footer;