import { useState } from "react";

export default function Like() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => setLikes(likes + 1)}
    >
      👍 {likes}
    </button>
  );
}
