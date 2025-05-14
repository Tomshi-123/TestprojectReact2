import styles from './Sidebar.module.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`fixed top-14 left-0 bottom-14 w-64 text-white opacity-100 ${isOpen ? styles.bubbleOpen : styles.bubbleClosed} z-50 border-r-2 border-green-400 ${styles.customSidebar}`}>
      <button className="absolute top-4 right-4 text-2xl text-green-400" onClick={toggleSidebar}>×</button>
      <ul className="mt-12 space-y-4 px-6">
        <li><a href="#home" className="block text-lg hover:text-green-400 transition" onClick={toggleSidebar}>Hem</a></li>
        <li><a href="#contact" className="block text-lg hover:text-green-400 transition" onClick={toggleSidebar}>Kontakt</a></li>
        <li><a href="#about" className="block text-lg hover:text-green-400 transition" onClick={toggleSidebar}>Om Oss</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;