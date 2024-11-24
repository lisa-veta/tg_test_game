import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Schedule.css";

const ScheduleItem = ({ schedule, onClick }) => {
    return (
        <div className="schedule-item" onClick={onClick}>
            <div className="schedule-item__time">
                <p className="schedule-item__start-time">{schedule.timeStart}</p>
                <p className="schedule-item__end-time">{schedule.timeEnd}</p>
            </div>
            <div className="schedule-item__details">
                <div className="schedule-item__subject">{schedule.name}</div>
                <div className="schedule-item__meta">
                    {schedule.place}, {schedule.type}
                </div>
            </div>
        </div>
    );
};

// Указываем propTypes для проверки входных данных
ScheduleItem.propTypes = {
    schedule: PropTypes.shape({
        id: PropTypes.number.isRequired,
        day: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        timeStart: PropTypes.string.isRequired,
        timeEnd: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ScheduleItem;
