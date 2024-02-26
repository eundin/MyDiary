import styles from "./page.module.css";
import "./page.scss";
import SignCompo from "../../components/Sign";
export default function Home() {
  return (
    <SignCompo
      message="Don't you have an account?"
      pageName="Join"
      pathName="join"
    />
  );
}
