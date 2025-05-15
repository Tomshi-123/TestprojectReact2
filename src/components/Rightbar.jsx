import styles from './Rightbar.module.css';

function Rightbar({ isOpen, toggleRightbar }) {
  return (
    <aside className={`fixed right-0 top-0 bottom-0 w-64 p-6 bg-teal-700 text-white opacity-100% ${isOpen ? styles.bubbleOpen : styles.bubbleClosed} border-l-2 border-green-400 shadow-lg shadow-green-400/20 z-50 ${styles.customRightbar}`}>
      <button className="absolute top-4 left-4 text-2xl text-green-400" onClick={toggleRightbar}>×</button>
      {/* <h3 className="text-xl font-semibold mb-4 text-green-400">Sidebar Höger</h3>
      <p className="text-gray-200">Extra information eller annonser här.</p> */}
    </aside>
  );
}

export default Rightbar;