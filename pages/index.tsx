import Link from "next/link";

const HomePage = () => {
  return (
    <div className="container p-[60px]">
      <Link href="/posts">
        <h1 className="text-6xl">Posts</h1>
      </Link>
      <Link href="/words">
        <h1 className="text-6xl">Words</h1>
      </Link>
    </div>
  );
};

export default HomePage;
