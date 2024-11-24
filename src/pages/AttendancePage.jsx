import React, { useState } from "react";

const AttendancePage = () => {
    // Статический список студентов
    const [attendance, setAttendance] = useState([
        { id: 1, name: "Челик", status: false },
        { id: 2, name: "Челик2", status: true },
        { id: 3, name: "Челик3", status: false },
        { id: 4, name: "Челик4", status: true },
    ]);

    const handleAttendanceUpdate = (studentId) => {
        const updatedAttendance = attendance.map((student) =>
            student.id === studentId
                ? { ...student, status: !student.status }
                : student
        );
        setAttendance(updatedAttendance);
    };

    return (
        <div>
            <h2>Посещаемость</h2>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {attendance.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.status ? "Я есть" : "Я нет"}</td>
                        <td>
                            <button onClick={() => handleAttendanceUpdate(student.id)}>
                                пометить чувака
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendancePage;

