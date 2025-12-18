"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import Link from "next/link";
import { useRef } from "react";

export default function VirtualizerPage() {
  const parentRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 10000 }, (_, i) => i);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Home
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">
          📦 React Virtual - 10K Items
        </h1>
      </div>
      <div className="flex-1 p-8">
        <div
          ref={parentRef}
          className="border border-gray-300 h-96 overflow-y-auto bg-white"
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualItems.map((virtualItem) => (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors"
              >
                Item {items[virtualItem.index]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
