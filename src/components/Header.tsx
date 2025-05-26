import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="FaceSchool Logo" 
            className="h-10 w-auto mr-3"
            onError={(e) => {
              // Fallback if logo doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className="text-xl font-bold text-primary">{title}</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-primary">
            Ajuda
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            FaceSchool
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
