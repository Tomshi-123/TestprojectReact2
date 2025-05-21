import styles from './Posts.module.css';
import Post from './Posts';

function PostList() {
  const posts = [
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Title',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Title',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (
    <section className={styles.customPosts}>
      <h2 className={styles.postsTitle}>Inlägg</h2>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} text={post.text} index={i} />
      ))}
    </section>
  );
}

export default PostList;