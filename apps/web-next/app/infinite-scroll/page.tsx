"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState(
    Array.from({
      length: 30,
    })
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;

      if (target.clientHeight + target.scrollTop > target.scrollHeight - 200) {
        setItems((prev) => [...prev, ...Array.from({ length: 20 })]);
      }
    };

    const scrollableDiv = scrollRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
      return () => scrollableDiv.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-50">
      <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Home
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">
          ♾️ Infinite Scroll Demo
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center flex-1">
        <div
          ref={scrollRef}
          className="bg-white flex flex-col h-75 overflow-y-scroll w-80 border border-gray-300"
        >
          {items.map((_, i) => {
            return (
              <div
                className="text-center text-black py-4 border-b border-gray-200"
                key={i}
              >
                Item {i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
