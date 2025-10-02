import React from 'react';
import './Header.css';

const Header = ({ onLogout, onToggleTheme, isDark, onToggleSidebar }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <button className="mobile-menu-btn" onClick={onToggleSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="logo">
                        <div className="logo-text">Система СтройКонтроль</div>
                    </div>
                </div>

                <div className="header-right">
                    <button className="theme-toggle-btn" onClick={onToggleTheme}>
                        {isDark ? '☀️' : '🌙'}
                    </button>

                    <div className="user-info">
                        <div className="user-avatar">ВП</div>
                        <div className="user-details">
                            <div className="user-name">Виктор Петров</div>
                            <div className="user-role">Прораб</div>
                        </div>
                    </div>

                    <button className="logout-btn" onClick={onLogout}>
                        Выход
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;