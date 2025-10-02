// Foreman.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Foreman/Header';
import Sidebar from '../components/Foreman/Sidebar';
import MainContent from '../components/Foreman/MainContent';
import Objects from '../components/Foreman/Objects';
import Remarks from '../components/Foreman/Remarks';
import Schedule from '../components/Foreman/Schedule';
import './Foreman.css';

const Foreman = ({ onBack, isDarkTheme, onToggleTheme, onLogout }) => {
    const [currentSection, setCurrentSection] = useState('main');
    const [isDark, setIsDark] = useState(isDarkTheme || false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Синхронизируем тему с App.js
    useEffect(() => {
        setIsDark(isDarkTheme);
    }, [isDarkTheme]);

    const handleToggleTheme = () => {
        if (onToggleTheme) {
            onToggleTheme();
        } else {
            setIsDark(!isDark);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleLogout = () => {
        console.log('Выход из системы...');
        // Сначала пробуем использовать onLogout, если передан
        if (typeof onLogout === 'function') {
            onLogout();
        }
        // Если onLogout не передан, используем onBack
        else if (typeof onBack === 'function') {
            onBack();
        }
        // Fallback
        else {
            console.log('Возврат на главную страницу');
            window.location.reload();
        }
    };

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }
    }, [isSidebarOpen]);

    // Рендер контента в зависимости от выбранной секции
    const renderContent = () => {
        switch (currentSection) {
            case 'objects':
                return <Objects />;
            case 'remarks':
                return <Remarks />;
            case 'schedule':
                return <Schedule />;
            case 'main':
            default:
                return <MainContent />;
        }
    };

    return (
        <div className={`foreman-dashboard ${isDark ? 'dark-theme' : ''}`}>
            <Header
                onToggleTheme={handleToggleTheme}
                isDark={isDark}
                onLogout={handleLogout}
                onToggleSidebar={toggleSidebar}
            />
            <div className="dashboard-content">
                <Sidebar
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                    isSidebarOpen={isSidebarOpen}
                    onSidebarClose={closeSidebar}
                />
                <main className="main-section">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default Foreman;