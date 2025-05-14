import reactLogo from '../assets/react.svg';
import styles from './Navbar.module.css';

function Navbar({ toggleSidebar, toggleRightbar }) {
  return (
   <nav className={`fixed top-0 left-0 w-full bg-blue-950 text-white z-50 px-4 sm:px-6 lg:px-8 py-4 border-b-2 border-green-400 shadow-lg shadow-green-400/20 opacity-100 ${styles.customNavbar}`}>
  <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
    
    {/* Left: Hamburger */}
    <div className="flex justify-start">
      <button className={styles.hamburger} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    {/* Center: Logo */}
    <div className="flex justify-center">
      <img src={reactLogo} alt="React Logo" className={`h-8 w-auto ${styles.rotate}`} />
    </div>

    {/* Right: User icon */}
    <div className="flex justify-end">
      <button className={styles.usersIcon} onClick={toggleRightbar}>
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" />
        </svg>
      </button>
    </div>

  </div>
</nav>

  );
}

export default Navbar;