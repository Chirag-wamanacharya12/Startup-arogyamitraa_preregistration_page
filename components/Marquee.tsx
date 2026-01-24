import React from 'react';

export interface MarqueeItem {
  text: string;
  gradient: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  direction: 'left' | 'right';
}

// Function to adjust text color based on background theme
// Ensures text color remains consistent (same) across different themes
const getTextColor = (theme: string) => {
  // We enforce white text for all gradients to maintain consistency
  return 'text-white';
};

export default function Marquee({ items, direction }: MarqueeProps) {
  return (
    <div className="overflow-hidden w-full h-16 mb-3">
      <div className={`marquee-container marquee-${direction} flex items-center`}>
        {/* Render items twice for infinite loop */}
        <div className="marquee-content flex space-x-4 items-center">
            {items.map((item, index) => (
            <span
                key={`a-${index}`}
                className={`feature-box px-4 py-2 rounded-xl shadow-lg bg-gradient-to-r ${item.gradient} ${getTextColor(item.gradient)} font-semibold`}
            >
                {item.text}
            </span>
            ))}
        </div>
        <div className="marquee-content flex space-x-4 items-center" aria-hidden="true">
            {items.map((item, index) => (
            <span
                key={`b-${index}`}
                className={`feature-box px-4 py-2 rounded-xl shadow-lg bg-gradient-to-r ${item.gradient} ${getTextColor(item.gradient)} font-semibold`}
            >
                {item.text}
            </span>
            ))}
        </div>
      </div>
    </div>
  );
}
