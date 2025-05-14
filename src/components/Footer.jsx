import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`bg-blue-950 text-white text-center py-4 border-t-2 border-green-400 opacity-100 ${styles.customFooter}`}>
      <p className="text-green-400">© 2025 Mitt Företag. Alla rättigheter förbehållna.</p>
    </footer>
  );
}

export default Footer;