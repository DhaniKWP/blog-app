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
    <div className="mt-6 border rounded-xl p-4 bg-gray-50 shadow-sm">
      {/* Input */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis komentar..."
          className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition"
        >
          Kirim
        </button>
      </div>

      {/* List Komentar */}
      <ul className="mt-4 space-y-2">
        {comments.map((c, i) => (
          <li
            key={i}
            className="border rounded-lg px-3 py-2 bg-white shadow-sm text-gray-700"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
