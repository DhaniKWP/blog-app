import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

export default function PostCard({ id, title, author, createdAt }: PostCardProps) {
  return (
    <div className="mb-4 border-b pb-2">
      <Link to={`/post/${id}`} className="text-xl text-blue-600 font-semibold">
        {title}
      </Link>
      <p className="text-gray-600">by {author} • {createdAt}</p>
    </div>
  );
}
