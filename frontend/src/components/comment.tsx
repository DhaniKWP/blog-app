import { useState } from "react";

export default function Comment() {
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    setComments([...comments, text]);
    setText("");
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis komentar..."
          className="border px-2 py-1 rounded w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-3 rounded"
        >
          Kirim
        </button>
      </div>
      <ul className="mt-2">
        {comments.map((c, i) => (
          <li key={i} className="border-b py-1">{c}</li>
        ))}
      </ul>
    </div>
  );
}
