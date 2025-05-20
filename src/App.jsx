import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import PostList from './components/PostList.jsx'; // ✅ rätt komponent
import Rightbar from './components/Rightbar.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const toggleRightbar = () => setIsRightbarOpen(prev => !prev);

  return (
    <div className="flex flex-col min-h-screen w-full bg-blue-950 opacity-100 relative overflow-hidden">
      <Navbar toggleSidebar={toggleSidebar} toggleRightbar={toggleRightbar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="relative flex-1 opacity-100">
        <PostList /> {/* ✅ rätt komponent */}
        <Rightbar isOpen={isRightbarOpen} toggleRightbar={toggleRightbar} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
