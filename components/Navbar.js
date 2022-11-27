import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="#about">
          <li>About Me</li>
        </Link>
        <Link href="#work">
          <li>Work</li>
        </Link>
        <Link href="#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
