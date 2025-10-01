import React from 'react';

const ObjectCard = () => {
    return (
        <div className="object-card">
            <div className="object-header">
                <div className="object-info">
                    <h4 className="object-title">Парк "Молодежный"</h4>
                    <p className="object-address">ул. Ленина, 20</p>
                    <p className="object-date">Начало работ: 20.01.2024</p>
                </div>
                <span className="object-status active">Активен</span>
            </div>

            <div className="object-tags">
                <span className="tag">Регистрация поставок материалов</span>
                <span className="tag">Устранение замечаний</span>
                <span className="tag">График работ</span>
            </div>

            <div className="progress-section">
                <div className="progress-header">
                    <span className="progress-label">Прогресс:</span>
                    <span className="progress-value">85%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
            </div>

            <div className="object-footer">
                <span className="completion-date">Плановая дата завершения: 20.03.2024</span>
                <div className="object-actions">
                    <button className="btn-primary">Открыть</button>
                    <button className="btn-secondary">Редактировать</button>
                </div>
            </div>
        </div>
    );
};

export default ObjectCard;