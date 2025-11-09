import React, { useState } from 'react';
import Header from './components/Header';
import PersonForm from './components/PersonForm';
import PersonPreview from './components/PersonPreview';
import Footer from './components/Footer';

export default function App() {
  const [person, setPerson] = useState({
    name: 'Alex',
    age: 25,
    hairColor: 'brown',
    mood: 'happy',
    accessories: ['Glasses'],
  });

  const handleChange = (patch) => setPerson((prev) => ({ ...prev, ...patch }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <section className="order-2 lg:order-1 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Customize</h2>
            <PersonForm {...person} onChange={handleChange} />
          </section>

          <section className="order-1 lg:order-2 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <PersonPreview {...person} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
