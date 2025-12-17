import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
            🚀 React Demos
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Explore different React patterns and libraries
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/infinite-scroll"
              className="block p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow hover:shadow-lg transition-shadow text-white font-semibold text-lg text-center hover:from-green-500 hover:to-green-700"
            >
              ♾️ Infinite Scroll
            </Link>

            <Link
              href="/react-virtualizer"
              className="block p-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow hover:shadow-lg transition-shadow text-white font-semibold text-lg text-center hover:from-purple-500 hover:to-purple-700"
            >
              📦 React Virtualizer
            </Link>

            <Link
              href="/redux"
              className="block p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow hover:shadow-lg transition-shadow text-white font-semibold text-lg text-center hover:from-blue-500 hover:to-blue-700"
            >
              📋 Redux Todo App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
