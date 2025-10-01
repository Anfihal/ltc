import React from 'react';

const Sidebar = ({ activeTab, onTabChange, isMobileOpen = false }) => {
    const menuItems = [
        { id: 'main', label: 'Главная', icon: '🏠' },
        { id: 'objects', label: 'Объекты', icon: '🏗️' },
        { id: 'remarks', label: 'Замечания', icon: '⚠️' },
        { id: 'schedule', label: 'График работ', icon: '📅' }
    ];

    return (
        <>
            <aside className={`foreman-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Меню</h3>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => onTabChange(item.id)}
                        >
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-label">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Оверлей для мобильных устройств */}
            {isMobileOpen && <div className="sidebar-overlay"></div>}
        </>
    );
};

export default Sidebar;