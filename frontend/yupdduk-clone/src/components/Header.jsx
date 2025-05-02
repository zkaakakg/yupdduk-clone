import 뒤로가기 from "../assets/뒤로가기.png";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={handleBack}>
        <img src={뒤로가기} alt="뒤로가기" className={styles.backButtonImg} />
      </button>
      <p className={styles.title}>{props.title}</p>
    </header>
  );
};

export default Header;
