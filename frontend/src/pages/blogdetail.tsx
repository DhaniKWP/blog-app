  import { useParams } from "react-router-dom";
import Like from "../components/like";
import Comment from "../components/comment";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();

  // Dummy data
  const post = {
    id,
    title: "Contoh Postingan",
    content: "Ini isi postingan detail...",
    author: "Admin",
    createdAt: "2025-08-29",
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500">by {post.author} on {post.createdAt}</p>
      <p className="mt-4">{post.content}</p>

      <div className="mt-6">
        <Like />
        <Comment />
      </div>
    </div>
  );
}
