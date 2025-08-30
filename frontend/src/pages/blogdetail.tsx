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
    const foundPost = savedPosts.find((p) => p.id === Number(id));
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, the post you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            ← Back to Posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Posts</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Post Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{post.author}</p>
                    <p className="text-xs">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
                  {post.categories.map((cat, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full hover:from-indigo-200 hover:to-purple-200 transition-colors duration-300"
                    >
                      #{cat}
                    </span>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="prose prose-lg prose-indigo max-w-none mb-12">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              {/* Social Actions */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <Like />
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span className="font-medium">Share</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span className="font-medium">Save</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <div className="mt-12">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Comments & Discussion
              </h3>
              <Comment />
            </div>
          </div>

          {/* Related Posts or Author Info */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {post.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">About {post.author}</h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  A passionate writer sharing insights about technology, programming, and personal experiences. 
                  Always learning and exploring new ways to create amazing content.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="px-6 py-2 bg-white text-indigo-600 rounded-full font-medium hover:shadow-md transition-all duration-300">
                    View Profile
                  </button>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}