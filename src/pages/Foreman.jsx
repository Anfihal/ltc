import React, { useState, useEffect } from 'react';
import Header from '../components/Foreman/Header';
import Sidebar from '../components/Foreman/Sidebar';
import MainContent from '../components/Foreman/MainContent';

const Foreman = ({ onBack, isDarkTheme, onToggleTheme }) => {
    const [activeTab, setActiveTab] = useState('main');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;

            setIsMobile(width < 1024);

            document.documentElement.style.setProperty('--viewport-width', `${width}px`);
            document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);

            // На мобильных устройствах сайдбар скрыт по умолчанию
            if (width < 1024) {
                setIsSidebarVisible(false);
            } else {
                setIsSidebarVisible(true);
            }
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    const handleLogout = () => {
        onBack();
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // На мобильных устройствах закрываем сайдбар после выбора вкладки
        if (isMobile) {
            setIsSidebarVisible(false);
        }
    };

    return (
        <div className={`foreman-app ${isDarkTheme ? 'dark-theme' : ''}`}>
            <Header
                onLogout={handleLogout}
                onToggleSidebar={toggleSidebar}
                onToggleTheme={onToggleTheme}
                isDarkTheme={isDarkTheme}
                isSidebarVisible={isSidebarVisible}
            />

            <div className="foreman-layout">
                <div className={`sidebar-overlay ${isSidebarVisible && isMobile ? 'active' : ''}`}
                    onClick={() => setIsSidebarVisible(false)}></div>

                <Sidebar
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    isMobileOpen={isSidebarVisible && isMobile}
                />

                <MainContent
                    activeTab={activeTab}
                    isSidebarVisible={isSidebarVisible}
                />
            </div>
        </div>
    );
};

export default Foreman;