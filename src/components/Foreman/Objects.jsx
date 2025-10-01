import React, { useState } from 'react';

const Objects = () => {
    const [activeTab, setActiveTab] = useState('objects');
    const [formData, setFormData] = useState({
        materialName: '',
        supplier: '',
        quantity: '',
        unit: 'шт',
        deliveryDate: '',
        workType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Поставка зарегистрирована!');
        // Здесь можно отправить данные на сервер
    };

    const tabs = ['Объекты', 'Регистрация поставки', 'История поставок', 'Управление графиком поставок'];

    return (
        <div className="objects-page">
            {/* Welcome Section */}
            <div className="welcome-section">
                <h2>Добро пожаловать, Виктор Петров</h2>
                <p className="user-role">Прораб</p>
            </div>

            {/* Page Title */}
            <div className="page-header">
                <h2 className="page-title">Контроль материалов</h2>
                <p className="page-subtitle">
                    Входной контроль и учет строительных материалов
                </p>
            </div>

            {/* Tabs */}
            <div className="objects-tabs">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`objects-tab ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Main Content based on active tab */}
            <div className="objects-content">
                {activeTab === 'объекты' && <ObjectsList />}
                {activeTab === 'регистрация-поставки' && <MaterialRegistration formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />}
                {activeTab === 'история-поставок' && <DeliveryHistory />}
                {activeTab === 'управление-графиком-поставок' && <DeliverySchedule />}
            </div>
        </div>
    );
};

// Компонент списка объектов
const ObjectsList = () => {
    const objects = [
        {
            id: 1,
            name: 'Парк "Молодежный"',
            address: 'ул. Ленина, 20',
            status: 'Активен',
            progress: 85,
            startDate: '20.01.2024',
            endDate: '20.03.2024'
        },
        {
            id: 2,
            name: 'Сквер "Центральный"',
            address: 'пр. Мира, 15',
            status: 'На паузе',
            progress: 45,
            startDate: '15.02.2024',
            endDate: '30.04.2024'
        },
        {
            id: 3,
            name: 'Бульвар "Северный"',
            address: 'ул. Северная, 8',
            status: 'Активен',
            progress: 60,
            startDate: '01.03.2024',
            endDate: '15.05.2024'
        }
    ];

    return (
        <div className="objects-list">
            <h3 className="section-title">Мои объекты</h3>
            <div className="objects-grid">
                {objects.map((object) => (
                    <div key={object.id} className="object-card">
                        <div className="object-header">
                            <div className="object-info">
                                <h4 className="object-title">{object.name}</h4>
                                <p className="object-address">{object.address}</p>
                                <p className="object-date">Начало работ: {object.startDate}</p>
                            </div>
                            <span className={`object-status ${object.status === 'Активен' ? 'active' : 'paused'}`}>
                                {object.status}
                            </span>
                        </div>

                        <div className="progress-section">
                            <div className="progress-header">
                                <span className="progress-label">Прогресс:</span>
                                <span className="progress-value">{object.progress}%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${object.progress}%` }}></div>
                            </div>
                        </div>

                        <div className="object-footer">
                            <span className="completion-date">Плановая дата завершения: {object.endDate}</span>
                            <div className="object-actions">
                                <button className="btn-primary">Открыть</button>
                                <button className="btn-secondary">Редактировать</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Компонент регистрации материалов
const MaterialRegistration = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className="material-registration">
            {/* Document Upload Section */}
            <div className="document-section">
                <h3 className="section-title">Документы поставки</h3>
                <p className="section-subtitle">
                    Оформите ТТН и паспорт качества
                </p>

                <div className="documents-grid">
                    {/* TTN */}
                    <div className="document-card">
                        <div className="document-icon">📄</div>
                        <div className="document-name">Товарно-транспортная накладная</div>
                        <div className="document-preview">
                            ТТН
                        </div>
                        <button className="document-action">Переснять</button>
                    </div>

                    {/* Quality Passport */}
                    <div className="document-card">
                        <div className="document-icon">🔒</div>
                        <div className="document-name">Паспорт качества (при наличии)</div>
                        <div className="document-preview">
                            Паспорт качества
                        </div>
                        <button className="document-action">
                            📷 Сделать фото
                        </button>
                    </div>
                </div>

                <div className="document-actions">
                    <button className="text-action">Распознать ТТН</button>
                    <button className="text-action">Ввести вручную</button>
                </div>
            </div>

            {/* Material Data Form */}
            <div className="form-section">
                <h3 className="section-title">Данные о материале</h3>
                <p className="section-subtitle">
                    Проверьте и дополните данные о материале
                </p>

                <form onSubmit={handleSubmit} className="material-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">
                                Наименование материала
                            </label>
                            <input
                                type="text"
                                name="materialName"
                                value={formData.materialName}
                                onChange={handleChange}
                                placeholder="Например: Тротуарная плитка серая"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Поставщик
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                value={formData.supplier}
                                onChange={handleChange}
                                placeholder="ООО 'Название'"
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">
                                Количество
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="0"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Единица измерения
                            </label>
                            <select
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="шт">шт</option>
                                <option value="м²">м²</option>
                                <option value="м³">м³</option>
                                <option value="кг">кг</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">
                                Дата поставки
                            </label>
                            <input
                                type="date"
                                name="deliveryDate"
                                value={formData.deliveryDate}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Тип работ
                            </label>
                            <select
                                name="workType"
                                value={formData.workType}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option value="">Выберите тип работ</option>
                                <option value="фундамент">Фундамент</option>
                                <option value="кладка">Кладка</option>
                                <option value="кровля">Кровля</option>
                                <option value="отделка">Отделка</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        🔒 Зарегистрировать поставку
                    </button>
                </form>
            </div>
        </div>
    );
};

// Компонент истории поставок
const DeliveryHistory = () => {
    const deliveries = [
        { id: 1, material: 'Тротуарная плитка', supplier: 'ООО "СтройМатериалы"', quantity: '500', date: '15.03.2024', status: 'Завершена' },
        { id: 2, material: 'Цемент М500', supplier: 'ООО "ЦементТорг"', quantity: '2т', date: '10.03.2024', status: 'Завершена' },
        { id: 3, material: 'Песок строительный', supplier: 'ИП Петров', quantity: '5м³', date: '05.03.2024', status: 'Завершена' }
    ];

    return (
        <div className="delivery-history">
            <h3 className="section-title">История поставок</h3>
            <div className="deliveries-table">
                <div className="table-header">
                    <div className="table-cell">Материал</div>
                    <div className="table-cell">Поставщик</div>
                    <div className="table-cell">Количество</div>
                    <div className="table-cell">Дата</div>
                    <div className="table-cell">Статус</div>
                </div>
                {deliveries.map((delivery) => (
                    <div key={delivery.id} className="table-row">
                        <div className="table-cell">{delivery.material}</div>
                        <div className="table-cell">{delivery.supplier}</div>
                        <div className="table-cell">{delivery.quantity}</div>
                        <div className="table-cell">{delivery.date}</div>
                        <div className="table-cell">
                            <span className={`status-badge ${delivery.status === 'Завершена' ? 'completed' : ''}`}>
                                {delivery.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Компонент управления графиком поставок
const DeliverySchedule = () => {
    const schedule = [
        { id: 1, material: 'Брусчатка', supplier: 'ООО "Дорожные материалы"', plannedDate: '25.03.2024', status: 'Ожидается' },
        { id: 2, material: 'Грунт растительный', supplier: 'ИП Сидоров', plannedDate: '28.03.2024', status: 'Ожидается' },
        { id: 3, material: 'Саженцы деревьев', supplier: 'ООО "Зеленый город"', plannedDate: '01.04.2024', status: 'Ожидается' }
    ];

    return (
        <div className="delivery-schedule">
            <h3 className="section-title">График поставок</h3>
            <div className="schedule-list">
                {schedule.map((item) => (
                    <div key={item.id} className="schedule-item">
                        <div className="schedule-info">
                            <h4 className="material-name">{item.material}</h4>
                            <p className="supplier">{item.supplier}</p>
                            <p className="planned-date">Плановая дата: {item.plannedDate}</p>
                        </div>
                        <div className="schedule-status">
                            <span className={`status-badge ${item.status === 'Ожидается' ? 'pending' : ''}`}>
                                {item.status}
                            </span>
                            <button className="btn-secondary small">Перенести</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Objects;