import React from 'react';

export default function Header() {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Person Builder
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-prose">
            Customize a simple character by choosing their name, age, hair color, mood, and accessories. See your person update in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}
