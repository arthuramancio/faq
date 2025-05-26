import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Category } from '../data/faqData';
import QuestionAccordion from './QuestionAccordion';

interface CategoryAccordionProps {
  category: Category;
  isSearching: boolean;
  searchQuery: string;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ 
  category, 
  isSearching,
  searchQuery 
}) => {
  const [isOpen, setIsOpen] = useState(isSearching);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Filter questions if searching
  const filteredQuestions = isSearching 
    ? category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : category.questions;

  // Don't render if no matching questions during search
  if (isSearching && filteredQuestions.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 border rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium text-gray-900">{category.title}</h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-2">
          {filteredQuestions.map((question) => (
            <QuestionAccordion 
              key={question.id} 
              question={question} 
              isSearching={isSearching}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
