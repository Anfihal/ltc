import React from 'react';

const ActionCards = () => {
    const actions = [
        {
            title: 'Регистрация поставок материалов',
            badge: '+1',
            description: 'Внесите данные о поступлении материалов',
            primaryAction: 'Записать',
            secondaryAction: 'Просмотреть'
        },
        {
            title: 'Устранение замечаний',
            badge: '+3',
            description: 'Отметьте выполненные замечания',
            primaryAction: 'Устранить',
            secondaryAction: 'Просмотреть'
        },
        {
            title: 'График работ',
            badge: '+2',
            description: 'Отметьте выполненные этапы работ',
            primaryAction: 'Отметить',
            secondaryAction: 'Просмотреть'
        }
    ];

    return (
        <div className="action-cards">
            {actions.map((action, index) => (
                <div key={index} className="action-card">
                    <div className="action-header">
                        <h5 className="action-title">{action.title}</h5>
                        <span className="action-badge">{action.badge}</span>
                    </div>
                    <p className="action-description">{action.description}</p>
                    <div className="action-buttons">
                        <button className="btn-primary small">{action.primaryAction}</button>
                        <button className="btn-secondary small">{action.secondaryAction}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActionCards;