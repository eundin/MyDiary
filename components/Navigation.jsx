import Link from "next/link";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/join">Join</Link>
    </nav>
  );
}
