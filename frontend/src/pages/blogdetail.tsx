import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Like from "../components/like";
import Comment from "../components/comment";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  categories?: string[];
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const savedPosts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");

    // Cari post berdasarkan id dari URL
    const foundPost = savedPosts.find((p) => p.id === Number(id));
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return <p className="p-6 text-red-500">Post not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500">
        by {post.author} on {post.createdAt}
      </p>
      <p className="mt-4">{post.content}</p>

      {/* kategori */}
      {post.categories && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {post.categories.map((cat, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* like & comment */}
      <div className="mt-6">
        <Like />
        <Comment />
      </div>
    </div>
  );
}
