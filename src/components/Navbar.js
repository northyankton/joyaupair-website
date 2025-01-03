import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: '首页', href: '#home' },
    { name: '关于我们', href: '#about' },
    { name: '项目详情', href: '#programs' },
    { name: '申请流程', href: '#application' },
    { name: '常见问题', href: '#faq' },
    { name: '用户故事', href: '#stories' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#home" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </a>
          </div>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#application"
              className="bg-primary text-white px-4 py-2 rounded-md ml-4"
            >
              立即申请
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            >
              <span className={`block h-6 w-6 ${isOpen ? 'hidden' : ''}`}>☰</span>
              <span className={`block h-6 w-6 ${isOpen ? '' : 'hidden'}`}>✕</span>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 