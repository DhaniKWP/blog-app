import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "Ruby",
  "CSharp",
  "CPP",
  "Go",
  "Dart",
  "Rust",
  "Kotlin",
  "Swift",
  "React",
  "NextJS",
  "Vue",
  "Angular",
  "Svelte",
  "NodeJS",
  "Express",
  "NestJS",
  "Spring",
  "Laravel",
  "Django",
  "Flask",
  "Rails",
  "Gin",
  "Flutter",
  "ReactNative",
  "Ionic",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCategories(selected);
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: "Anonymous",
      createdAt: new Date().toISOString().split("T")[0],
      categories: selectedCategories,
    };

    // Simpan ke localStorage
    const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    existingPosts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Dropdown Category */}
      <label className="block mb-2 font-semibold">Select Categories</label>
      <select
        multiple
        className="border p-2 w-full mb-4 h-40"
        value={selectedCategories}
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </div>
  );
}
