import React from 'react';

export interface MarqueeItem {
  text: string;
  gradient: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  direction: 'left' | 'right';
}

export default function Marquee({ items, direction }: MarqueeProps) {
  return (
    <div className="overflow-hidden w-full h-16 mb-3">
      <div className={`marquee-container marquee-${direction} flex items-center`}>
        {/* Render items twice for infinite loop */}
        <div className="marquee-content flex space-x-4 items-center">
            {items.map((item, index) => (
            <span
                key={`a-${index}`}
                className={`feature-box px-4 py-2 rounded-xl shadow-lg bg-gradient-to-r ${item.gradient} font-semibold`}
            >
                {item.text}
            </span>
            ))}
        </div>
        <div className="marquee-content flex space-x-4 items-center" aria-hidden="true">
            {items.map((item, index) => (
            <span
                key={`b-${index}`}
                className={`feature-box px-4 py-2 rounded-xl shadow-lg bg-gradient-to-r ${item.gradient} font-semibold`}
            >
                {item.text}
            </span>
            ))}
        </div>
      </div>
    </div>
  );
}
