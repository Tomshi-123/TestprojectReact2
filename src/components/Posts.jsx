import styles from './Posts.module.css';

function Posts() {
  return (
    <section className={styles.customPosts}>
      <h2 className={styles.postsTitle}>Inlägg</h2>
      <div className={styles.postCard}>
        <h3 className={styles.postCardTitle}>Inlägg 1</h3>
        <p className={styles.postCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          {/* Längre text för att trigga scroll i postCard */}
        </p>
      </div>
      <div className={styles.postCard}>
        <h3 className={styles.postCardTitle}>Inlägg 2</h3>
        <p className={styles.postCardText}>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          {/* Längre text för att trigga scroll i postCard */}
        </p>
      </div>
      <div className={styles.postCard}>
        <h3 className={styles.postCardTitle}>Inlägg 1</h3>
        <p className={styles.postCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          {/* Längre text för att trigga scroll i postCard */}
        </p>
      </div>
      <div className={styles.postCard}>
        <h3 className={styles.postCardTitle}>Inlägg 1</h3>
        <p className={styles.postCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          {/* Längre text för att trigga scroll i postCard */}
        </p>
      </div>
      
    </section>
  );
}

export default Posts;