import React from 'react';
import './ControlService.css';

const ControlService = ({
    onLogout,
    onToggleTheme,
    isDark,
    onToggleSidebar,
    currentSection,
    onSectionChange,
    isSidebarOpen,
    onSidebarClose
}) => {
    const menuItems = [
        { id: 'main', name: 'Главная' },
        { id: 'objects', name: 'Все объекты' },
        { id: 'remarks', name: 'Реестр замечаний' },
        { id: 'reports', name: 'Отчеты' },
        { id: 'contractors', name: 'Подрядчики' }
    ];

    const handleItemClick = (itemId) => {
        onSectionChange(itemId);
        onSidebarClose();
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
                        <button className="mobile-menu-btn" onClick={onToggleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="logo">
                            <div className="logo-text">Служба Контроля</div>
                        </div>
                    </div>

                    <div className="header-right">
                        <button className="theme-toggle-btn" onClick={onToggleTheme}>
                            {isDark ? '☀️' : '🌙'}
                        </button>

                        <div className="user-info">
                            <div className="user-avatar">СК</div>
                            <div className="user-details">
                                <div className="user-name">Сергей Ковалев</div>
                                <div className="user-role">Служба контроля</div>
                            </div>
                        </div>

                        <button className="logout-btn" onClick={onLogout}>
                            Выход
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={onSidebarClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Mobile Menu Header */}
                <div className="mobile-menu-header">
                    <div className="user-info">
                        <div className="user-avatar">СК</div>
                        <div className="user-details">
                            <div className="user-name">Сергей Ковалев</div>
                            <div className="user-role">Служба контроля</div>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onSidebarClose}>
                        ×
                    </button>
                </div>

                {/* Navigation */}
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

            {/* Main Content */}
            <div className="main-content">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <h1>Добро пожаловать, Сергей Ковалев</h1>
                    <div className="role-badge">Служба контроля качества</div>
                </div>

                {/* Stats Cards */}
                <div className="stats-cards">
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-label">Активные объекты</div>
                            <span className="stat-trend">+3</span>
                        </div>
                        <div className="stat-value">15</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-label">Открытые замечания</div>
                            <span className="stat-trend trend-danger">+5</span>
                        </div>
                        <div className="stat-value">27</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-label">Проверки сегодня</div>
                            <span className="stat-trend">+2</span>
                        </div>
                        <div className="stat-value">8</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-label">Эффективность</div>
                            <span className="stat-trend">+2%</span>
                        </div>
                        <div className="stat-value">84%</div>
                    </div>
                </div>

                {/* Main Header */}
                <div className="main-header">
                    <h2>Контроль качества строительных объектов</h2>
                    <p>Мониторинг соблюдения стандартов и нормативов</p>
                </div>

                {/* Content based on current section */}
                <div className="content-section">
                    {currentSection === 'main' && (
                        <div className="dashboard-content">
                            <h3>Панель управления контролем качества</h3>
                            <p>Здесь будут отображаться ключевые метрики и уведомления</p>
                        </div>
                    )}
                    {currentSection === 'objects' && (
                        <div className="objects-content">
                            <h3>Реестр всех объектов</h3>
                            <p>Список всех строительных объектов под контролем</p>
                        </div>
                    )}
                    {currentSection === 'remarks' && (
                        <div className="remarks-content">
                            <h3>Реестр замечаний</h3>
                            <p>Все выявленные нарушения и замечания</p>
                        </div>
                    )}
                    {currentSection === 'reports' && (
                        <div className="reports-content">
                            <h3>Отчеты и аналитика</h3>
                            <p>Статистика и аналитические отчеты</p>
                        </div>
                    )}
                    {currentSection === 'contractors' && (
                        <div className="contractors-content">
                            <h3>Подрядчики и исполнители</h3>
                            <p>Реестр подрядных организаций</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ControlService;