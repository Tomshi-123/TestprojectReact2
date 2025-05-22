import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList.jsx';
import TagList from './components/TagList.jsx';
import Rightbar from './components/Rightbar.jsx';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const toggleRightbar = () => setIsRightbarOpen(prev => !prev);

  return (
    <div className="relative min-h-screen bg-blue-950 text-white">
      <Navbar toggleSidebar={toggleSidebar} toggleRightbar={toggleRightbar} />
      <div className="pt-16">
        <Header />
        <main className="max-w-7xl mx-auto px-4 my-8 flex flex-col md:flex-row gap-8">
          <div className="posts-container">
            <PostList />
          </div>
          <div className="w-full md:w-64 bg-[#67baebf0] rounded-md shadow-lg p-6">
            <TagList />
          </div>
        </main>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Rightbar isOpen={isRightbarOpen} toggleRightbar={toggleRightbar} />
    </div>
  );
}

export default App;