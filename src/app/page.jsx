import Image from "next/image";
import styles from "./page.module.css";
import "./page.scss";

export default function Home() {
  return (
    <div className="center-box">
      <Image
        className="main-logo"
        src="title.svg"
        width={326}
        height={80}
        alt="메인 로고"
      />
      <div className="ear">
        <div></div>
        <div></div>
      </div>
      <form className="login-form">
        <input type="text" placeholder="id" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <span>Join</span>
    </div>
  );
}
