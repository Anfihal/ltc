import React from 'react';
import StatsCards from './StatsCards';
import ObjectCard from './ObjectCard';
import ActionCards from './ActionCards';

const MainContent = () => {
    return (
        <div className="main-content">
            {/* Приветствие */}
            <div className="welcome-section">
                <h1>Добро пожаловать, Виктор Петров</h1>
                <div className="role-badge">Прораб</div>
            </div>

            {/* Статистика */}
            <StatsCards />

            {/* Основной заголовок */}
            <div className="main-header">
                <h2>Управление назначенными объектами и контроль процессов</h2>
                <p>Объекты, где вы назначены ответственным лицом</p>
            </div>

            {/* Карточка объекта */}
            <ObjectCard />

            {/* Карточки действий */}
            <ActionCards />
        </div>
    );
};

export default MainContent;