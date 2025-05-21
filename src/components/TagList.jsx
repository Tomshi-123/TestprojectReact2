import styles from './TagList.module.css';

function TagButton({ label }) {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button className={styles.tagButton} onClick={handleClick}>
      {label}
    </button>
  );
}

function TagList() {
  const tags = [
    '耐心',
    '好奇心',
    '问题解决能力',
    '坚持不懈',
  ];

  return (
    <div className={styles.tagList}>
      <h2 className={styles.tagListTitle}></h2>
      {tags.map((tag, index) => (
        <TagButton key={index} label={tag} />
      ))}
    </div>
  );
}

export default TagList;