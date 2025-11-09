import React from 'react';

export default function PersonForm({ name, age, hairColor, mood, accessories, onChange }) {
  const hairColors = [
    { value: 'black', label: 'Black' },
    { value: 'brown', label: 'Brown' },
    { value: 'blonde', label: 'Blonde' },
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'pink', label: 'Pink' },
    { value: 'green', label: 'Green' },
    { value: 'purple', label: 'Purple' },
  ];

  const moods = [
    { value: 'happy', label: 'Happy' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'sad', label: 'Sad' },
  ];

  const toggleAccessory = (acc) => {
    const set = new Set(accessories);
    if (set.has(acc)) set.delete(acc); else set.add(acc);
    onChange({ accessories: Array.from(set) });
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g., Alex"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
        <input
          type="number"
          min="0"
          max="120"
          value={age}
          onChange={(e) => onChange({ age: Number(e.target.value) })}
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="25"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hair Color</label>
        <select
          value={hairColor}
          onChange={(e) => onChange({ hairColor: e.target.value })}
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {hairColors.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mood</span>
        <div className="flex gap-3">
          {moods.map((m) => (
            <button
              type="button"
              key={m.value}
              onClick={() => onChange({ mood: m.value })}
              className={`px-3 py-1.5 rounded-full border text-sm ${mood === m.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700'}`}
              aria-pressed={mood === m.value}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Accessories</span>
        <div className="flex flex-wrap gap-2">
          {['Glasses', 'Hat', 'Headphones'].map((acc) => (
            <label key={acc} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={accessories.includes(acc)}
                onChange={() => toggleAccessory(acc)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-800 dark:text-gray-200">{acc}</span>
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}
