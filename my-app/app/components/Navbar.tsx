// components/LeftSideNav.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="p-4 flex flex-col justify-center">
        <button onClick={toggleNav} className="self-end text-black p-2 text-base mb-4">
          》
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 h-full z-50 flex" style={{ width: '25%' }}>
          <div className="bg-gray-700 p-4 flex-1">
            {/* 导航链接或其他内容 */}
          </div>
          <div className="bg-white p-4 flex flex-col justify-center">
            <button onClick={toggleNav} className=" text-black p-2 self-end text-base">
              《
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
