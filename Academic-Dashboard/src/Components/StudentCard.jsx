function StudentCard({ student }) {
  return (
    <div className="card">

      <h3>{student.name}</h3>

      <p>Course : {student.course}</p>

      <p>Grade : {student.grade}</p>

    </div>
  );
}

export default StudentCard;