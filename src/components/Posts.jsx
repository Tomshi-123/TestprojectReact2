import styles from './Posts.module.css';

function Post({ title, text, index }) {
  return (
    <div
      className={`${styles.fadeInAndShake} ${styles.postCard}`}
      style={{ animationDelay: `${index * 150}ms, calc(${index * 150}ms + 0.6s)` }}
    >
      <h3 className={styles.postCardTitle}>{title}</h3>
      <p className={styles.postCardText}>{text}</p>
    </div>
  );
}

export default Post;