import React from 'react';

const StatsCards = ({ isMobile = false }) => {
    const stats = [
        { label: 'Мои объекты', value: '3', trend: null, icon: '🏗️' },
        { label: 'Поставки контрактов', value: '8', trend: '+2', icon: '📦' },
        { label: 'Замечания', value: '2', trend: '-1', icon: '⚠️' },
        { label: 'Эффективность', value: '68%', trend: '+5%', icon: '📊' }
    ];

    return (
        <div className={`stats-cards ${isMobile ? 'mobile' : ''}`}>
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-header">
                        <div className="stat-label">
                            {isMobile && <span className="stat-icon">{stat.icon}</span>}
                            {stat.label}
                        </div>
                        {stat.trend && <span className="stat-trend">{stat.trend}</span>}
                    </div>
                    <div className="stat-value">{stat.value}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;