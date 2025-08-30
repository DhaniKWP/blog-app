import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">MyBlog</Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
