import styles from './Rightbar.module.css';

function Rightbar({ isOpen, toggleRightbar }) {
  const sidebarHeight = 600; // Adjust based on your sidebar height

  const glitterLines = Array.from({ length: 42 }).map((_, i) => {
    const initialTop = Math.random() * (sidebarHeight + 40) - 40;
    const animDuration = 4 + Math.random() * 2;
    const animDelay = Math.random() * animDuration;

    return (
      <div
        key={i}
        className={styles.rainLine}
        style={{
          right: `${i * 6}px`,
          top: `${initialTop}px`,
          animationDuration: `${animDuration}s`,
          animationDelay: `-${animDelay}s`,
          opacity: 0.3 + Math.random() * 0.5,
        }}
      />
    );
  });

  return (
    <aside
      className={`fixed right-0 top-0 bottom-0 w-64 p-6 border-l-2 border-green-400 shadow-lg shadow-green-400/20 z-50 ${isOpen ? styles.bubbleOpen : styles.bubbleClosed} ${styles.customRightbar}`}
    >
      <div className={styles.rainEffect}>{glitterLines}</div>

      <button
        className="absolute top-4 left-4 text-2xl text-green-400 z-10"
        onClick={toggleRightbar}
      >
        ×
      </button>

      <div className={styles.buttonContainer}>
        {['按钮一 ', '按钮二', '按钮三', '按钮四', '按钮五', '按钮六'].map((label, index) => (
          <button key={index} className={styles.pixelButton}>
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Rightbar;