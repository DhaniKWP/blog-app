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

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category.toLowerCase())
        ? prev.filter(cat => cat !== category.toLowerCase())
        : [...prev, category.toLowerCase()]
    );
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Create New <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Post</span>
          </h1>
          <p className="text-gray-600 text-lg">Share your thoughts with the world</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-700 font-medium">{error}</span>
                  </div>
                </div>
              )}

              {/* Title Input */}
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Post Title
                </label>
                <input
                  className="w-full px-4 py-4 text-lg border-2 border-gray-100 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter an engaging title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Content Textarea */}
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Content
                </label>
                <textarea
                  className="w-full px-4 py-4 h-64 text-lg border-2 border-gray-100 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors duration-300 resize-none bg-gray-50 focus:bg-white"
                  placeholder="Write your amazing content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Categories
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-4 bg-gray-50 rounded-2xl">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryToggle(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategories.includes(cat.toLowerCase())
                          ? 'bg-indigo-500 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                
                {selectedCategories.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedCategories.length} categories selected</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  🚀 Publish Post
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-semibold text-gray-700">Live Preview</h2>
              </div>
              
              <div className="space-y-6">
                {title || content ? (
                  <article className="prose prose-lg max-w-none">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {title || "Untitled Post"}
                    </h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">A</span>
                        </div>
                        <span>Anonymous</span>
                      </div>
                      <span>•</span>
                      <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {content || "Start writing to see your content here..."}
                    </div>
                    
                    {selectedCategories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
                        {selectedCategories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-medium"
                          >
                            #{cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 italic">Start writing to see preview...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}