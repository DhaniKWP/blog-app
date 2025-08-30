import React from "react";

interface CategoryBadgeProps {
  label: string;
}

const colors: { [key: string]: string } = {
  // === Bahasa Pemrograman ===
  javascript: "bg-yellow-200 text-yellow-800",
  typescript: "bg-blue-200 text-blue-800",
  python: "bg-green-200 text-green-800",
  java: "bg-red-200 text-red-800",
  php: "bg-purple-200 text-purple-800",
  ruby: "bg-pink-200 text-pink-800",
  csharp: "bg-indigo-200 text-indigo-800",
  cpp: "bg-gray-200 text-gray-800",
  go: "bg-teal-200 text-teal-800",
  dart: "bg-sky-200 text-sky-800",
  rust: "bg-orange-200 text-orange-800",
  kotlin: "bg-fuchsia-200 text-fuchsia-800",
  swift: "bg-rose-200 text-rose-800",

  // === Framework / Library Frontend ===
  react: "bg-cyan-200 text-cyan-800",
  nextjs: "bg-gray-300 text-gray-900",
  vue: "bg-emerald-200 text-emerald-800",
  angular: "bg-red-300 text-red-900",
  svelte: "bg-orange-300 text-orange-900",

  // === Backend Framework ===
  nodejs: "bg-green-300 text-green-900",
  express: "bg-lime-200 text-lime-800",
  nestjs: "bg-red-400 text-red-900",
  spring: "bg-green-400 text-green-900",
  laravel: "bg-rose-300 text-rose-900",
  django: "bg-emerald-300 text-emerald-900",
  flask: "bg-gray-400 text-gray-900",
  rails: "bg-red-200 text-red-800",
  gin: "bg-teal-300 text-teal-900",

  // === Mobile Framework ===
  flutter: "bg-sky-300 text-sky-900",
  reactnative: "bg-cyan-300 text-cyan-900",
  ionic: "bg-indigo-300 text-indigo-900",

  // === Default ===
  default: "bg-gray-200 text-gray-800",
};


const CategoryBadge: React.FC<CategoryBadgeProps> = ({ label }) => {
  const key = label.toLowerCase();
  const colorClass = colors[key] || colors.default;

  return (
    <span
      className={`px-3 py-1 text-sm font-medium rounded-full ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default CategoryBadge;
