import 뒤로가기 from "../assets/뒤로가기.png";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={props.ClickFunc}>
        <img src={뒤로가기} alt="" className={styles.backButtonImg} />
      </button>
      <p className="{styles.backButton}">{props.title}</p>
    </header>
  );
};
export default Header;
