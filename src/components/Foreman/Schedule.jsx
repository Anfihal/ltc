import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState('general');

    // Данные для общего графика работ
    const scheduleData = [
        { task: 'Подготовка территории', start: 0, duration: 7, progress: 100 },
        { task: 'Фундамент', start: 7, duration: 14, progress: 100 },
        { task: 'Кладка стен', start: 21, duration: 21, progress: 80 },
        { task: 'Кровля', start: 42, duration: 10, progress: 30 },
        { task: 'Отделка', start: 52, duration: 15, progress: 0 },
        { task: 'Ландшафт', start: 67, duration: 8, progress: 0 },
    ];

    // Данные по объектам
    const projects = [
        {
            id: 1,
            name: 'Парк "Молодежный"',
            address: 'ул. Мира, 42',
            area: '53 790 м²',
            status: 'Активный',
            responsible: 'Виктор Петров',
            startDate: '20.01.2024',
            endDate: '20.03.2024',
            progress: 65,
            issuesCount: 2,
            tasksCount: 5,
            tasks: ['Реконструкция дорожек', 'Установка МОБ', 'Озеленение', 'Освещение']
        },
        {
            id: 2,
            name: 'Сквер "Победы"',
            address: 'ул. Ленина, 20',
            area: '25 300 м²',
            status: 'Активный',
            responsible: 'Виктор Петров',
            startDate: '15.02.2024',
            endDate: '30.04.2024',
            progress: 45,
            issuesCount: 1,
            tasksCount: 3,
            tasks: ['Укладка плитки', 'Установка скамеек', 'Посадка деревьев']
        },
        {
            id: 3,
            name: 'Бульвар "Северный"',
            address: 'ул. Северная, 8',
            area: '18 500 м²',
            status: 'Планирование',
            responsible: 'Виктор Петров',
            startDate: '01.03.2024',
            endDate: '15.05.2024',
            progress: 10,
            issuesCount: 0,
            tasksCount: 2,
            tasks: ['Подготовка территории', 'Планировка дорожек']
        }
    ];

    const handleEditSchedule = () => {
        alert('Редактирование графика работ');
    };

    const handleMarkCompletion = () => {
        alert('Отметка выполнения работ');
    };

    const handleOpenProject = (projectId) => {
        alert(`Открытие проекта #${projectId}`);
    };

    return (
        <div className="schedule-page">
            {/* Welcome Section */}
            <div className="welcome-section">
                <h2>Добро пожаловать, Виктор Петров</h2>
                <p className="user-role">Прораб</p>
            </div>

            {/* Page Title */}
            <div className="page-header">
                <h2 className="page-title">График работ</h2>
                <p className="page-subtitle">
                    Планирование и контроль сроков выполнения работ
                </p>
            </div>

            {/* Tabs */}
            <div className="schedule-tabs">
                {[
                    { label: 'Общий график', key: 'general' },
                    { label: 'По объектам', key: 'objects' },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`schedule-tab ${activeTab === tab.key ? 'active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content based on active tab */}
            <div className="schedule-content">
                {activeTab === 'general' && (
                    <GeneralSchedule
                        scheduleData={scheduleData}
                        onEdit={handleEditSchedule}
                        onMarkCompletion={handleMarkCompletion}
                    />
                )}
                {activeTab === 'objects' && (
                    <ObjectsSchedule
                        projects={projects}
                        onOpenProject={handleOpenProject}
                    />
                )}
            </div>
        </div>
    );
};

const GeneralSchedule = ({ scheduleData, onEdit, onMarkCompletion }) => {
    const totalMonths = 12;
    const currentWeek = 3; // Текущая неделя для демонстрации

    // Данные для графика Ганта
    const ganttData = [
        { task: 'Подготовка территории', start: 0, duration: 2, progress: 100, status: 'completed' },
        { task: 'Фундамент', start: 2, duration: 4, progress: 100, status: 'completed' },
        { task: 'Кладка стен', start: 6, duration: 6, progress: 80, status: 'in-progress' },
        { task: 'Кровля', start: 12, duration: 3, progress: 30, status: 'in-progress' },
        { task: 'Отделка', start: 15, duration: 4, progress: 0, status: 'planned' },
        { task: 'Ландшафт', start: 19, duration: 2, progress: 0, status: 'planned' },
    ];

    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    return (
        <div className="general-schedule">
            <div className="section-header">
                <h3 className="section-title">Календарный график работ</h3>
                <p className="section-subtitle">Диаграмма Ганта</p>
            </div>

            {/* Gantt Controls */}
            <div className="gantt-controls">
                <div className="gantt-zoom-controls">
                    <button className="gantt-zoom-btn active">Месяцы</button>
                    <button className="gantt-zoom-btn">Кварталы</button>
                    <button className="gantt-zoom-btn">Недели</button>
                </div>
                <div className="gantt-period-controls">
                    <button className="gantt-period-btn">2024</button>
                    <button className="gantt-period-btn active">2025</button>
                    <button className="gantt-period-btn">Все</button>
                </div>
                <div className="timeline-controls">
                    <button className="schedule-action-btn" onClick={onEdit}>
                        ✏️ Редактировать
                    </button>
                    <button className="schedule-action-btn secondary" onClick={onMarkCompletion}>
                        ✅ Отметить выполнение
                    </button>
                </div>
            </div>

            {/* Gantt Chart */}
            <div className="gantt-container">
                <div className="gantt-chart">
                    {/* Header */}
                    <div className="gantt-header">
                        <div className="gantt-header-cell">Задача</div>
                        {months.map((month, index) => (
                            <div key={index} className="gantt-header-cell">
                                {month} 2024
                            </div>
                        ))}
                    </div>

                    {/* Task Rows */}
                    {ganttData.map((task, index) => (
                        <div key={index} className="gantt-task-row">
                            <div className="gantt-task-cell">
                                {task.task}
                            </div>
                            {Array.from({ length: totalMonths }, (_, monthIndex) => (
                                <div key={monthIndex} className="gantt-timeline-cell">
                                    <div className="gantt-bar-container">
                                        {monthIndex >= task.start && monthIndex < task.start + task.duration && (
                                            <div
                                                className={`gantt-bar ${task.status}`}
                                                style={{
                                                    left: `${((monthIndex - task.start) / task.duration) * 100}%`,
                                                    width: `${(1 / task.duration) * 100}%`
                                                }}
                                            >
                                                <div
                                                    className="gantt-bar-progress"
                                                    style={{ width: `${task.progress}%` }}
                                                />
                                                <span className="gantt-bar-label">
                                                    {task.progress}%
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Grid Lines */}
                <div className="gantt-grid">
                    {Array.from({ length: totalMonths }, (_, index) => (
                        <div
                            key={index}
                            className={`gantt-grid-cell ${index === currentWeek ? 'current' : ''}`}
                        />
                    ))}
                </div>

                {/* Current Date Line */}
                <div
                    className="gantt-current-line"
                    style={{ left: `${(currentWeek / totalMonths) * 100}%` }}
                />
            </div>

            {/* Gantt Legend */}
            <div className="gantt-legend">
                <div className="gantt-legend-item">
                    <div className="gantt-legend-color completed"></div>
                    <span>Выполнено</span>
                </div>
                <div className="gantt-legend-item">
                    <div className="gantt-legend-color in-progress"></div>
                    <span>В работе</span>
                </div>
                <div className="gantt-legend-item">
                    <div className="gantt-legend-color planned"></div>
                    <span>Запланировано</span>
                </div>
                <div className="gantt-legend-item">
                    <div className="gantt-legend-color delayed"></div>
                    <span>Задержка</span>
                </div>
            </div>
        </div>
    );
};

// Компонент графика по объектам
const ObjectsSchedule = ({ projects, onOpenProject }) => {
    return (
        <div className="objects-schedule">
            <div className="section-header">
                <h3 className="section-title">График работ по объектам</h3>
                <p className="section-subtitle">Детализированный план по каждому объекту</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={onOpenProject}
                    />
                ))}
            </div>
        </div>
    );
};

// Компонент карточки проекта
const ProjectCard = ({ project, onOpen }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Активный': return 'active';
            case 'Планирование': return 'planning';
            case 'Завершен': return 'completed';
            case 'Задержка': return 'delayed';
            default: return 'planning';
        }
    };

    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-info">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-address">{project.address}</p>
                    <p className="project-area">Площадь: {project.area}</p>
                </div>
                <span className={`project-status ${getStatusClass(project.status)}`}>
                    {project.status}
                </span>
            </div>

            <div className="project-tasks">
                <div className="tasks-label">Состав работ:</div>
                <div className="tasks-list">
                    {project.tasks.map((task, index) => (
                        <span key={index} className="task-tag">
                            {task}
                        </span>
                    ))}
                </div>
            </div>

            <div className="project-progress">
                <div className="progress-header">
                    <span className="progress-label">Готовность:</span>
                    <span className="progress-value">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="project-details">
                <div className="detail-item">
                    <span className="detail-label">Ответственный:</span>
                    <span className="detail-value">{project.responsible}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Начало:</span>
                    <span className="detail-value">{project.startDate}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Завершение:</span>
                    <span className="detail-value">{project.endDate}</span>
                </div>
            </div>

            <div className="project-stats">
                <div className="stat-item">
                    <div className="stat-number">{project.issuesCount}</div>
                    <div className="stat-label">Замечания</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{project.tasksCount}</div>
                    <div className="stat-label">Задачи</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{project.progress}%</div>
                    <div className="stat-label">Прогресс</div>
                </div>
            </div>

            <div className="project-actions">
                <button
                    className="project-action"
                    onClick={() => onOpen(project.id)}
                >
                    📋 Открыть объект
                </button>
                <button
                    className="project-action secondary"
                    onClick={() => onOpen(project.id)}
                >
                    👥 Назначить исполнителя
                </button>
            </div>
        </div>
    );
};

export default Schedule;