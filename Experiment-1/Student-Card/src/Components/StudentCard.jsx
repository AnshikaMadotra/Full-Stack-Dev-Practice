function StudentCard({ name, age, course, grade }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>Age : {age}</p>

      <p>Course : {course}</p>

      <p>Grade : {grade}</p>
    </div>
  );
}

export default StudentCard;