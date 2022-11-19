import Link from "next/link";

const Header = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <p className="text-3xl underline">Home</p>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
