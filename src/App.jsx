import React, { useState, useEffect } from "react";
import ControlService from "./pages/ControlService";
import Foreman from "./pages/Foreman";
import Inspector from "./pages/Inspector";
import "./index.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark-theme');
    }

    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      if (newTheme) {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Функция для выхода (возврата на главную)
  const handleLogout = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'foreman':
        return (
          <Foreman
            onBack={handleBackToHome}
            isDarkTheme={isDark}
            onToggleTheme={toggleTheme}
            onLogout={handleLogout} // Добавляем этот пропс
          />
        );
      case 'control':
        return <ControlService onBack={handleBackToHome} isDarkTheme={isDark} onToggleTheme={toggleTheme} />;
      case 'inspector':
        return <Inspector onBack={handleBackToHome} isDarkTheme={isDark} onToggleTheme={toggleTheme} />;
      default:
        return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <div className={`home-page ${isTransitioning ? 'theme-transition' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
          </svg>
        )}
      </button>

      <div className="main-container">
        <div className="content-wrapper">
          <div className="header-section">
            <h1 className="main-title">Система благоустройства</h1>
            <p className="main-subtitle">
              Управление процессами благоустройства Москвы
            </p>
          </div>

          <div className="demo-section">
            <p className="demo-label">Демо-доступ</p>
          </div>

          <div className="roles-section">
            <p className="roles-description">Выберите роль для входа в систему</p>

            <div className="roles-buttons">
              <button onClick={() => setCurrentPage('control')} className="role-button control-btn">
                <span className="btn-emoji">👨‍💼</span>
                Войти как Служба контроля
              </button>
              <button onClick={() => setCurrentPage('foreman')} className="role-button foreman-btn">
                <span className="btn-emoji">🏗️</span>
                Войти как Прораб
              </button>
              <button onClick={() => setCurrentPage('inspector')} className="role-button inspector-btn">
                <span className="btn-emoji">👁️</span>
                Войти как Инспектор
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return renderPage();
}

export default App;