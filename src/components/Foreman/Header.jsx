import React from 'react';

const Header = ({ onLogout, onToggleSidebar, onToggleTheme, isDarkTheme, isSidebarVisible, isMobile = false, userName = "Виктор Петров", userRole = "Прораб" }) => {
    return (
        <header className="foreman-header">
            <div className="header-content">
                {/* Левая часть с кнопкой меню и логотипом */}
                <div className="header-left">
                    <button
                        className="sidebar-toggle"
                        onClick={onToggleSidebar}
                        title={isSidebarVisible ? "Скрыть меню" : "Показать меню"}
                    >
                        {isSidebarVisible ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                            </svg>
                        )}
                    </button>

                    <div className="logo">
                        <span className="logo-icon">🏗️</span>
                        <h1 className="logo-text">
                            {isMobile ? 'Стройконтроль' : 'Система Стройконтроль'}
                        </h1>
                    </div>
                </div>

                {/* Правая часть шапки */}
                <div className="header-right">
                    {/* Переключатель темы */}
                    <button
                        className="theme-toggle-btn"
                        onClick={onToggleTheme}
                        title={isDarkTheme ? "Переключить на светлую тему" : "Переключить на темную тему"}
                    >
                        {isDarkTheme ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                            </svg>
                        )}
                    </button>

                    <div className="user-info">
                        <div className="user-avatar">👤</div>
                        {!isMobile && (
                            <div className="user-details">
                                <div className="user-name">{userName}</div>
                                <div className="user-role">{userRole}</div>
                            </div>
                        )}
                    </div>
                    <button
                        className="logout-btn"
                        onClick={onLogout}
                        title="Выход"
                    >
                        {isMobile ? '🚪' : 'Выход'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;