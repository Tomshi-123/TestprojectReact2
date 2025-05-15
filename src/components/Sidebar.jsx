import styles from './Sidebar.module.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarHeight = 600; // sätt detta efter sidebarens faktiska höjd

  const glitterLines = Array.from({ length: 42 }).map((_, i) => {
    // slumpa start-top mellan -40 och sidebarHeight så regnet är spritt jämt
    const initialTop = Math.random() * (sidebarHeight + 40) - 40;

    return (
      <div
        key={i}
        className={styles.rainLine}
        style={{
          left: `${i * 6}px`,
          top: `${initialTop}px`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: 0.3 + Math.random() * 0.5,
        }}
      />
    );
  });

  const links = [
    { href: "#home", text: "Hem" },
    { href: "#contact", text: "Kontakt" },
    { href: "#about", text: "Om Oss" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 w-64 text-white opacity-100 ${
        isOpen ? styles.bubbleOpen : styles.bubbleClosed
      } z-50 border-r-2 border-green-400 ${styles.customSidebar}`}
    >
      <div className={styles.rainEffect}>{glitterLines}</div>

      <button
        className="absolute top-4 right-4 text-2xl text-green-400 z-10"
        onClick={toggleSidebar}
      >
        ×
      </button>
      <ul className="mt-12 space-y-4 px-6 z-10 relative">
        {links.map(({ href, text }) => (
          <li key={text}>
            <a
              href={href}
              className={`${styles.neonBlink} block text-lg hover:text-green-400 transition`}
              onClick={toggleSidebar}
              style={{
                animationDelay: `${Math.random() * 7}s`, // slumpmässig delay för otakt
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
