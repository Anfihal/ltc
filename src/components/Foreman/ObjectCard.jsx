import React from 'react';
import './ObjectCard.css';

const ObjectCard = () => {
    const progress = 85;
    const tags = [
        { name: 'Регистрация поставок материалов', icon: '📦' },
        { name: 'Устранение замечаний', icon: '⚠️' },
        { name: 'График работ', icon: '📅' }
    ];

    return (
        <div className="object-card">
            {/* Card Header with Gradient */}
            <div className="card-header">
                <div className="card-badge active">Активен</div>
                <div className="card-actions">
                    <button className="icon-btn favorite">❤️</button>
                    <button className="icon-btn menu">⋯</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="card-content">
                {/* Object Info */}
                <div className="object-info">
                    <div className="object-icon">🏗️</div>
                    <div className="object-details">
                        <h3 className="object-title">Парк "Молодежный"</h3>
                        <div className="object-meta">
                            <div className="meta-item">
                                <span className="meta-icon">📍</span>
                                <span className="meta-text">ул. Ленина, 20</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">📅</span>
                                <span className="meta-text">Начало: 20.01.2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="object-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            <span className="tag-icon">{tag.icon}</span>
                            {tag.name}
                        </span>
                    ))}
                </div>

                {/* Progress Section */}
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-label">Прогресс выполнения</span>
                        <div className="progress-stats">
                            <span className="progress-value">{progress}%</span>
                            <div className="progress-trend">
                                <span className="trend-icon">📈</span>
                                <span className="trend-text">+5% за неделю</span>
                            </div>
                        </div>
                    </div>

                    <div className="progress-container">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="progress-glow"></div>
                            </div>
                        </div>
                        <div className="progress-milestones">
                            <div className="milestone active">25%</div>
                            <div className="milestone active">50%</div>
                            <div className="milestone active">75%</div>
                            <div className="milestone">100%</div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                            <div className="stat-value">12</div>
                            <div className="stat-label">Работников</div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-info">
                            <div className="stat-value">58</div>
                            <div className="stat-label">Дней осталось</div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">💰</div>
                        <div className="stat-info">
                            <div className="stat-value">92%</div>
                            <div className="stat-label">Бюджет</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
                <div className="completion-info">
                    <div className="completion-date">
                        <span className="date-icon">🎯</span>
                        Завершение: 20.03.2024
                    </div>
                    <div className="days-remaining">
                        <div className="days-count">58 дней</div>
                        <div className="days-label">до завершения</div>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="btn btn-primary">
                        <span className="btn-icon">👁️</span>
                        Открыть
                    </button>
                    <button className="btn btn-secondary">
                        <span className="btn-icon">✏️</span>
                        Редактировать
                    </button>
                    <button className="btn btn-ghost">
                        <span className="btn-icon">📊</span>
                    </button>
                </div>
            </div>

            {/* Hover Effect Layer */}
            <div className="card-hover-effect"></div>
        </div>
    );
};

export default ObjectCard;