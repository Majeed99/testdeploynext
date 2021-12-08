import Link from "next/link";
function NotFound() {
  return (
    <div>
      <h1>Oooops...</h1>
      <h2>That page cannot be found </h2>
      <p>
        {" "}
        Go back to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
