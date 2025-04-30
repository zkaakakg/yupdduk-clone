import 뒤로가기 from "../assets/뒤로가기.png";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <button className="backButton" onClick={props.ClickFunc}>
        <img src={뒤로가기} alt="" className="backButtonImg" />
      </button>
      <p className="title">{props.title}</p>
    </header>
  );
};
export default Header;
