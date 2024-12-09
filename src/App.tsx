import React from 'react';
import DarkModeToggle from '../src/assets/components/DarkModeToggle';
import ProductList from '../src/assets/components/ProductList';
import HomePage from './assets/pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4">
     
  <HomePage/>
      </header>
      <main className="p-4">
        <ProductList />
      </main>
    </div>
  );
};

export default App;
