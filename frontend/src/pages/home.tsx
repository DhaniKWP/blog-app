import { useEffect, useState } from "react";
import PostCard from "../components/postcard";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  categories?: string[];
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");

    // Dummy data awal
    // const dummyPosts: Post[] = [
    //   { id: 1, title: "Belajar React", content: "Isi konten React...", author: "Dhani", createdAt: "2025-08-29", categories: ["laravel", "kotlin"] },
    //   { id: 2, title: "TypeScript itu mudah", content: "Isi konten TS...", author: "Kusuma", createdAt: "2025-08-28", categories: ["react", "typescript"] },
    // ];

    setPosts([...savedPosts]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
