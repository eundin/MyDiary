import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import "./page.scss";

export default function Home() {
  return (
    <div className="center-box">
      {/* 로고에 나중에 "/"로 이동하는 기능 추가 */}
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
        <div className="join-box">
          <span>Don't you have an account?</span>
          <Link href="/join">
            <span className="join">
              Join <img src="paw.svg" width={20} height={20} alt="발자국" />
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
