import Image from "next/image";
import Link from "next/link";
import "./Sign.scss";

export default function SignCompo({ message, pageName, pathName }) {
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
        <input type="text" placeholder="Id" />
        <input type="password" placeholder="Password" />
        {pageName === "Login" ? (
          <input type="password" placeholder="Confirm Password" />
        ) : (
          ""
        )}
        {/* Todo: 버튼 컴포넌트로 만들어서 현재 경로에 따라 텍스트 다르게 설정하기 */}
        <button>Login</button>
        <div className="join-box">
          <span>{message}</span>
          <Link href={`/${pathName}`}>
            <span className="page-name">
              {pageName}{" "}
              <img src="paw.svg" width={20} height={20} alt="발자국" />
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
