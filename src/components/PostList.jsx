import styles from './Posts.module.css';
import Post from './Posts';

function PostList() {
  const posts = [
    {
      title: 'This is The Post Title 1',
      text: 'The Post Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'This is The Post Title 2',
      text: 'The Post Body: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'This is The Post Title 3',
      text: 'The Post Body: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
