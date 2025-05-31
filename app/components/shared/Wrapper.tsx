import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Wrapper;
