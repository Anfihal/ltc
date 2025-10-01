import React, { useState } from 'react';

const Schedule = () => {
    const [activeTab, setActiveTab] = useState('general'); // general / objects

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

// Компонент общего графика работ
const GeneralSchedule = ({ scheduleData, onEdit, onMarkCompletion }) => {
    const totalWeeks = 12;

    return (
        <div className="general-schedule">
            <div className="schedule-section">
                <div className="section-header">
                    <h3 className="section-title">Общий график работ</h3>
                    <p className="section-subtitle">План-график выполнения работ по всем объектам</p>
                </div>

                <div className="schedule-table">
                    {/* Header with weeks */}
                    <div className="schedule-header">
                        <div className="task-column">Задача</div>
                        <div className="progress-column">Прогресс</div>
                        <div className="timeline-column">
                            <div className="weeks-grid">
                                {Array.from({ length: totalWeeks }, (_, i) => (
                                    <div key={i} className="week-header">
                                        {i + 1} нед
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tasks */}
                    {scheduleData.map((task, index) => (
                        <div key={index} className="schedule-row">
                            <div className="task-column">
                                <div className="task-name">{task.task}</div>
                            </div>
                            <div className="progress-column">
                                <div className="progress-display">
                                    <div className="progress-text">{task.progress}%</div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${task.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-column">
                                <div className="weeks-grid">
                                    {Array.from({ length: totalWeeks }, (_, week) => {
                                        const isInRange = week >= task.start && week < task.start + task.duration;
                                        const isCompleted = week < task.start + (task.duration * task.progress / 100);

                                        return (
                                            <div
                                                key={week}
                                                className={`week-cell ${isInRange ? 'scheduled' : ''} ${isCompleted ? 'completed' : ''}`}
                                                title={`Неделя ${week + 1}: ${isCompleted ? 'Выполнено' : isInRange ? 'Запланировано' : ''}`}
                                            >
                                                {isInRange && (
                                                    <div className="task-bar">
                                                        {isCompleted && <div className="completion-marker">✓</div>}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="schedule-actions">
                    <button className="btn-primary" onClick={onEdit}>
                        Редактировать график
                    </button>
                    <button className="btn-secondary" onClick={onMarkCompletion}>
                        Отметить выполнение работ
                    </button>
                </div>

                {/* Legend */}
                <div className="schedule-legend">
                    <div className="legend-item">
                        <div className="legend-color completed"></div>
                        <span>Выполнено</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color scheduled"></div>
                        <span>Запланировано</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color"></div>
                        <span>Не запланировано</span>
                    </div>
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
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-info">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-address">{project.address}</p>
                    <p className="project-area">Площадь: {project.area}</p>
                </div>
                <span className={`project-status ${project.status === 'Активный' ? 'active' : 'planning'}`}>
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
            </div>

            <button
                className="project-action"
                onClick={() => onOpen(project.id)}
            >
                Открыть объект, изменить или назначить исполнителя
            </button>
        </div>
    );
};

export default Schedule;