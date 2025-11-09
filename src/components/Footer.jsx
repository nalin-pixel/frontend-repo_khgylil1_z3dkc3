import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Made with ❤️ in your sandbox. Have fun designing!
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Tip: Toggle dark mode in your browser/OS to see the theme adapt.
          </p>
        </div>
      </div>
    </footer>
  );
}
