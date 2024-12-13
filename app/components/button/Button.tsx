import styles from './button.module.css';

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return <button className={styles.button}>{title}</button>;
}
