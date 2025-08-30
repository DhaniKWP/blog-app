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
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      {/* Title */}
      <Link
        to={`/blog/${id}`}
        className="block text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        {title}
      </Link>

      {/* Meta Info */}
      <p className="text-sm text-gray-500 mt-1">
        By <span className="font-medium text-gray-700">{author}</span> •{" "}
        {new Date(createdAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      {/* Categories */}
      {categories && categories.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {categories.map((cat, index) => (
            <CategoryBadge key={index} label={cat} />
          ))}
        </div>
      )}
    </div>
  );
}
