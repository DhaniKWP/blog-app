import { Link } from "react-router-dom";
import CategoryBadge from "./categorybadge";

interface PostCardProps {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  categories?: string[];
}

export default function PostCard({ id, title, author, createdAt, categories }: PostCardProps) {
  return (
    <div className="mb-4 border-b pb-2">
      <Link to={`/blog/${id}`} className="text-xl text-blue-600 font-semibold">
        {title}
      </Link>
      <p className="text-gray-600">by {author} • {createdAt}</p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {categories?.map((cat, index) => (
          <CategoryBadge key={index} label={cat} />
        ))}
      </div>
    </div>
  );
}
