import styles from './Posts.module.css';

function Posts() {
  return (
    <section className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6  rounded-sm shadow-green-400/50  opacity-100 ${styles.customPosts}`}>
      <h2 className="text-2xl font-semibold mb-4 text-white">Inlägg</h2>
      <div className="bg-indigo-700 p-4 rounded-md mb-4">
        <h3 className="text-xl font-medium text-green-400">Inlägg 1</h3>
        <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="bg-indigo-700 p-4 rounded-md">
        <h3 className="text-xl font-medium text-green-400">Inlägg 2</h3>
        <p className="text-gray-200">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
  );
}

export default Posts;