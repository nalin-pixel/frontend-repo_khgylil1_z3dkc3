import React from 'react';

function Accessory({ label }) {
  const map = {
    Glasses: '👓',
    Hat: '🎩',
    Headphones: '🎧',
  };
  return (
    <span className="text-xl" title={label} aria-label={label}>
      {map[label] || '✨'}
    </span>
  );
}

export default function PersonPreview({ name, age, hairColor, mood, accessories }) {
  const faceBg = 'bg-amber-200';
  const hairColorClass = {
    black: 'bg-gray-900',
    brown: 'bg-amber-900',
    blonde: 'bg-yellow-400',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    pink: 'bg-pink-400',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  }[hairColor] || 'bg-gray-800';

  const moodMouth = {
    happy: 'after:content-[\'\'] after:block after:w-10 after:h-10 after:border-b-4 after:border-gray-900 after:rounded-b-full after:translate-y-1',
    neutral: 'after:content-[\'\'] after:block after:w-10 after:h-1 after:bg-gray-900',
    sad: 'after:content-[\'\'] after:block after:w-10 after:h-10 after:border-t-4 after:border-gray-900 after:rounded-t-full after:-translate-y-2',
  }[mood] || '';

  const ringColor = {
    happy: 'ring-green-400',
    neutral: 'ring-gray-300',
    sad: 'ring-blue-400',
  }[mood] || 'ring-gray-300';

  return (
    <div className="w-full">
      <div className={`mx-auto aspect-square max-w-xs rounded-2xl ring-8 ${ringColor} relative flex items-center justify-center bg-white shadow-lg`}>
        {/* Hair */}
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-40 h-20 ${hairColorClass} rounded-t-full`} />
        {/* Face */}
        <div className={`w-56 h-56 ${faceBg} rounded-full flex items-center justify-center relative shadow-inner`}>
          {/* Eyes */}
          <div className="absolute top-24 left-1/2 -translate-x-16 w-4 h-4 bg-gray-900 rounded-full" />
          <div className="absolute top-24 left-1/2 translate-x-12 w-4 h-4 bg-gray-900 rounded-full" />
          {/* Mouth (mood) */}
          <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 ${moodMouth}`} />
        </div>
        {/* Accessories */}
        {accessories?.length ? (
          <div className="absolute -bottom-3 inset-x-0 flex items-center justify-center gap-3">
            {accessories.map((a) => (
              <div key={a} className="px-3 py-1 rounded-full bg-white/80 backdrop-blur border shadow-sm text-gray-800">
                <Accessory label={a} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name || 'Unnamed Person'}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{age ? `${age} years old` : 'Age unknown'}</p>
      </div>
    </div>
  );
}
