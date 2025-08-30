import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "JavaScript", "TypeScript", "Python", "Java", "PHP", "Ruby",
  "CSharp", "CPP", "Go", "Dart", "Rust", "Kotlin", "Swift",
  "React", "NextJS", "Vue", "Angular", "Svelte", "NodeJS",
  "Express", "NestJS", "Spring", "Laravel", "Django", "Flask",
  "Rails", "Gin", "Flutter", "ReactNative", "Ionic",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCategories(selected);
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      setError("⚠️ Title and content are required.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: "Anonymous",
      createdAt: new Date().toISOString().split("T")[0],
      categories: selectedCategories,
    };

    const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    existingPosts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            ✍️ Create New Post
          </h1>

          {error && (
            <div className="mb-4 text-red-600 font-medium">{error}</div>
          )}

          {/* Title */}
          <label className="block font-semibold mb-2">Title</label>
          <input
            className="border rounded-xl p-3 w-full mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Content */}
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            className="border rounded-xl p-3 w-full h-40 mb-5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write something amazing..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Category */}
          <label className="block font-semibold mb-2">Categories</label>
          <select
            multiple
            className="border rounded-xl p-3 w-full h-40 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategories}
            onChange={handleCategoryChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>

          {selectedCategories.length > 0 && (
            <p className="text-sm text-gray-600 mb-5">
              {selectedCategories.length} category selected
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-3 rounded-xl hover:opacity-90 transition"
          >
            🚀 Publish
          </button>
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            📖 Live Preview
          </h2>
          {title || content ? (
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {title || "Untitled"}
              </h3>
              <p className="text-gray-700 whitespace-pre-line mb-4 max-w-full">
                {content || "No content yet..."}
              </p>
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-400 italic">Start writing to see preview...</p>
          )}
        </div>
      </div>
    </div>
  );
}
