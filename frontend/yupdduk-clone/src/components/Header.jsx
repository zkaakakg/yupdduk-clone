import 뒤로가기 from "../assets/뒤로가기.png";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.ClickFunc) {
      props.ClickFunc(); // ClickFunc이 있으면 그거 실행
    } else {
      navigate(-1); // 없으면 뒤로가기
    }
  };

  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={handleClick}>
        <img src={뒤로가기} alt="뒤로가기" className={styles.backButtonImg} />
      </button>
      <p className={styles.title}>{props.title}</p>
    </header>
  );
};

export default Header;
