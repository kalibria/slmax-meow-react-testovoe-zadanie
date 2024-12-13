import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>Logo Store</div>
      <button>Cart</button>
    </div>
  );
}
