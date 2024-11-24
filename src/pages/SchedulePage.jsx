import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShedulePage.css";
import ScheduleItem from "../components/Schedule/Schedule";

const SchedulePage = () => {
    // Статический список расписания
    const [schedule] = useState([
        { id: 1, day: "понедельник", date: "22.01.24", name: "Матеша", timeStart: "10:00", timeEnd: "09:40", place: "134", type: "практика" },
        { id: 2, day: "вторник", date: "22.01.24", name: "русский", timeStart: "10:00", timeEnd: "09:40", place: "134", type: "практика" },
        { id: 3, day: "вторник", date: "22.01.24", name: "казахский", timeStart: "10:00", timeEnd: "09:40", place: "134", type: "практика" },
        { id: 4, day: "четверг", date: "22.01.24", name: "английский", timeStart: "10:00", timeEnd: "09:40", place: "134", type: "практика" },
    ]);

    const navigate = useNavigate();

    const handleSubjectClick = (subjectId) => {
        navigate(`/attendance/${subjectId}`);
    };

    return (
        <div>
            <h2>Расписание</h2>
            <div className="schedule-container">
                {schedule.map((subject) => (
                    <ScheduleItem
                        key={subject.id}
                        schedule={subject}
                        onClick={() => handleSubjectClick(subject.id)} // Передаем функцию с ID предмета
                    />
                ))}
            </div>
        </div>
    );
};

export default SchedulePage;

