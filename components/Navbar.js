import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/Album/">
          <a>Albums</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
