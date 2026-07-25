import "./App.css";
import StudentCard from "./Components/StudentCard";

function App() {

  const students = [
    {
      id:1,
      name:"Anshika",
      age:18,
      course:"B.E CSE",
      grade:"A"
    },

    {
      id:2,
      name:"Rahul",
      age:21,
      course:"BCA",
      grade:"B+"
    },

    {
      id:3,
      name:"Priya",
      age:19,
      course:"MBA",
      grade:"A+"
    },

    {
      id:4,
      name:"Karan",
      age:22,
      course:"MCA",
      grade:"B"
    },

    {
      id:5,
      name:"Simran",
      age:20,
      course:"B.Tech AI",
      grade:"A"
    }
  ];

  return (

    <div className="container">

      <h1>Student List</h1>

      <div className="student-list">

        {
          students.map((student)=>(
            <StudentCard
              key={student.id}
              name={student.name}
              age={student.age}
              course={student.course}
              grade={student.grade}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;