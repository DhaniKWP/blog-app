import { useState } from "react";

export default function Like() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600 active:scale-95 transition"
    >
      👍 <span>{likes}</span>
    </button>
  );
}
