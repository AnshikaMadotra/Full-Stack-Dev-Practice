function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Student Details</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Course : {student.course}</p>
          <p>Semester : {student.semester}</p>
          <p>CGPA : {student.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;