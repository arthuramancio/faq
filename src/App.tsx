import { useState } from 'react';
import { faqData } from './data/faqData';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryAccordion from './components/CategoryAccordion';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim() !== '';

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="FAQ FaceSchool" />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Como podemos ajudar você?</h1>
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="mt-8">
            {faqData.map((category) => (
              <CategoryAccordion 
                key={category.id} 
                category={category} 
                isSearching={isSearching}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
