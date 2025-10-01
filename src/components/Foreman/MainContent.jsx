import React from 'react';
import StatsCards from './StatsCards';
import ObjectCard from './ObjectCard';
import ActionCards from './ActionCards';
import Objects from './Objects';
import Remarks from './Remarks';
import Schedule from './Schedule';

const MainContent = ({ activeTab, isSidebarVisible }) => {
    const renderContent = () => {
        switch (activeTab) {
            case 'main':
                return (
                    <>
                        <div className="welcome-section">
                            <h2>Добро пожаловать, Виктор Петров</h2>
                            <p className="user-role">Прораб</p>
                        </div>

                        <StatsCards />

                        <div className="section-title">
                            <h3>Управление назначенными объектами и контроль процессов</h3>
                            <p>Объекты, где вы назначены ответственным лицом</p>
                        </div>

                        <ObjectCard />
                        <ActionCards />
                    </>
                );

            case 'objects':
                return <Objects />;

            case 'remarks':
                return <Remarks />;

            case 'schedule':
                return <Schedule />;

            default:
                return null;
        }
    };

    return (
        <main className={`foreman-main ${!isSidebarVisible ? 'sidebar-hidden' : ''}`}>
            {renderContent()}
        </main>
    );
};

export default MainContent;