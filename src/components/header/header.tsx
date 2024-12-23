import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex w-full lg:px-12 fixed lg:py-4 text-white justify-between bg-transparent ">
      <div>
        <Link href="/" className="text-2xl font-semibold">
          Auto<span className="text-amber-400">Matorr</span>
        </Link>
      </div>
      <div>
        <Link href="/auth">
          <span className="inline-block text-white bg-purple-600 px-12 py-2 rounded hover:bg-purple-700">
            Login
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
