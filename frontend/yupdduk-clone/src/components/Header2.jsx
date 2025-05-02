import styles from "../styles/Header2.module.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <div>
        <button className={styles.backButton} onClick={handleBack}>
          <img
            src="https://static.thenounproject.com/png/65506-200.png"
            alt="뒤로가기"
            className={styles.backButtonImg}
          />
        </button>
      </div>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
      <div>
        <button onClick={handleHome}>
          <img
            className={styles.home}
            src="https://www.yupdduk.com/bj-images/icon_main.png"
            alt="홈으로 이동"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
