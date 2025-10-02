import React, { useState } from 'react';
import './Remarks.css'; // Добавьте эту строку импорта

const Remarks = () => {
    const [activeTab, setActiveTab] = useState('received'); // received / fixed

    // Моковые данные замечаний
    const violations = [
        {
            id: 1,
            type: 'Нарушение технологии укладки',
            object: 'Сквер "Победы"',
            author: 'Анна Иванова (Служба контроля)',
            description:
                'Неправильная толщина асфальтового покрытия в зоне А-15. Требуется исправление согласно проектной документации.',
            dateCreated: '10.02.2024',
            deadline: '20.02.2024',
            status: 'Высокий',
            overdueDays: 581,
            isOverdue: true,
        },
        {
            id: 2,
            type: 'Отсутствие разметки',
            object: 'Сквер "Победы"',
            author: 'Анна Иванова (Служба контроля)',
            description:
                'Не выполнена разметка пешеходных зон согласно проекту. Необходимо нанести разметку в соответствии с чертежами.',
            dateCreated: '08.02.2024',
            deadline: '18.02.2024',
            status: 'Средний',
            overdueDays: 583,
            isOverdue: true,
        },
        {
            id: 3,
            type: 'Несоответствие материалов',
            object: 'Парк "Молодежный"',
            author: 'Сергей Петров (Служба контроля)',
            description:
                'Используемый цемент не соответствует заявленным в проекте маркам. Требуется замена материала.',
            dateCreated: '15.03.2024',
            deadline: '25.03.2024',
            status: 'Критический',
            overdueDays: 0,
            isOverdue: false,
        },
    ];

    const fixedViolations = [
        {
            id: 4,
            type: 'Неправильная установка ограждения',
            object: 'Сквер "Победы"',
            author: 'Анна Иванова (Служба контроля)',
            description:
                'Ограждение установлено с нарушением техники безопасности.',
            dateCreated: '01.02.2024',
            dateFixed: '05.02.2024',
            status: 'Средний',
        },
    ];

    const handleTakeToWork = (id) => {
        alert(`Замечание #${id} взято в работу`);
        // Здесь можно обновить статус в API или state
    };

    const handleMarkAsFixed = (id) => {
        alert(`Замечание #${id} отмечено как устранённое`);
        // Здесь можно обновить статус в API или state
    };

    const currentViolations = activeTab === 'received' ? violations : fixedViolations;

    return (
        <div className="remarks-page">
            {/* Welcome Section */}
            <div className="welcome-section">
                <h2>Добро пожаловать, Виктор Петров</h2>
                <p className="user-role">Прораб</p>
            </div>

            {/* Page Title */}
            <div className="page-header">
                <h2 className="page-title">Замечания и нарушения</h2>
                <p className="page-subtitle">
                    Устранение замечаний от службы контроля
                </p>
            </div>

            {/* Tabs */}
            <div className="remarks-tabs">
                {[
                    { label: 'Полученные замечания', key: 'received', count: violations.length },
                    { label: 'Устранённые', key: 'fixed', count: fixedViolations.length },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`remarks-tab ${activeTab === tab.key ? 'active' : ''}`}
                    >
                        {tab.label}
                        {tab.count > 0 && <span className="tab-badge">{tab.count}</span>}
                    </button>
                ))}
            </div>

            {/* Violations List */}
            <div className="violations-list">
                {currentViolations.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">✅</span>
                        <p>Нет замечаний</p>
                    </div>
                ) : (
                    currentViolations.map((violation) => (
                        <ViolationCard
                            key={violation.id}
                            violation={violation}
                            activeTab={activeTab}
                            onTakeToWork={handleTakeToWork}
                            onMarkAsFixed={handleMarkAsFixed}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

// Компонент карточки замечания
const ViolationCard = ({ violation, activeTab, onTakeToWork, onMarkAsFixed }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Критический':
                return 'critical';
            case 'Высокий':
                return 'high';
            case 'Средний':
                return 'medium';
            case 'Низкий':
                return 'low';
            default:
                return 'medium';
        }
    };

    return (
        <div className={`violation-card ${violation.isOverdue ? 'overdue' : ''}`}>
            <div className="violation-header">
                <div className="violation-info">
                    <h3 className="violation-type">{violation.type}</h3>
                    <div className="violation-meta">
                        <span className="meta-item">
                            <strong>Объект:</strong> {violation.object}
                        </span>
                        <span className="meta-item">
                            <strong>Автор:</strong> {violation.author}
                        </span>
                    </div>
                </div>
                <div className="violation-actions">
                    <span className={`status-badge ${getStatusColor(violation.status)}`}>
                        {violation.status}
                    </span>
                    <button className="btn-primary small">Открыть</button>
                </div>
            </div>

            <p className="violation-description">{violation.description}</p>

            <div className="violation-dates">
                <span className="date-item">Создано: {violation.dateCreated}</span>
                <span className="date-item">Срок: {violation.deadline}</span>
                {activeTab === 'fixed' && (
                    <span className="date-item">Устранено: {violation.dateFixed}</span>
                )}
            </div>

            {violation.isOverdue && (
                <div className="overdue-warning">
                    <span className="warning-icon">⚠️</span>
                    <span className="warning-text">Просрочено на {violation.overdueDays} дн.</span>
                </div>
            )}

            {activeTab === 'received' && (
                <div className="violation-buttons">
                    <button
                        onClick={() => onMarkAsFixed(violation.id)}
                        className="btn-primary"
                    >
                        Отметить устранение
                    </button>
                    <button
                        onClick={() => onTakeToWork(violation.id)}
                        className="btn-secondary"
                    >
                        Взять в работу
                    </button>
                </div>
            )}

            {activeTab === 'fixed' && (
                <div className="fixed-indicator">
                    <span className="fixed-icon">✅</span>
                    <span className="fixed-text">Замечание устранено</span>
                </div>
            )}
        </div>
    );
};

export default Remarks;