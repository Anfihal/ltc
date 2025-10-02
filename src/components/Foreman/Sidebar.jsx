import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentSection, onSectionChange, isSidebarOpen, onSidebarClose }) => {
    const menuItems = [
        { id: 'main', name: 'Главная' },
        { id: 'objects', name: 'Объекты' },
        { id: 'remarks', name: 'Замечания' },
        { id: 'schedule', name: 'График работ' }
    ];

    const handleItemClick = (itemId) => {
        onSectionChange(itemId);
        onSidebarClose();
    };

    return (
        <>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={onSidebarClose}
                />
            )}

            {/* Сайдбар */}
            <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Заголовок мобильного меню */}
                <div className="mobile-menu-header">
                    <div className="user-info">
                        <div className="user-avatar">ВП</div>
                        <div className="user-details">
                            <div className="user-name">Виктор Петров</div>
                            <div className="user-role">Прораб</div>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onSidebarClose}>
                        ×
                    </button>
                </div>

                {/* Навигация */}
                <nav className="sidebar-nav">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-item ${currentSection === item.id ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;