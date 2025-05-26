import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Question } from '../data/faqData';
import ReactMarkdown from 'react-markdown';

interface QuestionAccordionProps {
  question: Question;
  isSearching: boolean;
  searchQuery: string;
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ 
  question, 
  isSearching,
  searchQuery 
}) => {
  const [isOpen, setIsOpen] = useState(isSearching);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Highlight search terms in text
  const highlightText = (text: string) => {
    if (!searchQuery || searchQuery.trim() === '') {
      return text;
    }

    // This is a simple implementation - for production, consider a more robust solution
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const questionText = isSearching ? highlightText(question.question) : question.question;

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        className="flex justify-between items-center w-full py-2 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <div 
          className="font-medium text-gray-800"
          dangerouslySetInnerHTML={{ __html: questionText }}
        />
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-2 pt-1 text-gray-600">
          <ReactMarkdown>{question.answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default QuestionAccordion;
