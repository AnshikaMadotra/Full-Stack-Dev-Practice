import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentList from "./Components/StudentList";
import Footer from "./Components/Footer";

function App() {

  const students = [
    {
      id: 1,
      name: "Anshika",
      course: "B.Tech CSE",
      semester: 5,
      cgpa: 8.8
    },
    {
      id: 2,
      name: "Rahul",
      course: "BCA",
      semester: 3,
      cgpa: 8.1
    },
    {
      id: 3,
      name: "Priya",
      course: "B.Sc IT",
      semester: 5,
      cgpa: 9.2
    },
    {
      id: 4,
      name: "Aman",
      course: "MCA",
      semester: 2,
      cgpa: 8.5
    },
    {
      id: 5,
      name: "Neha",
      course: "B.Tech AI",
      semester: 7,
      cgpa: 9.1
    }
  ];
  const showSidebar = true;
  const showStudents = true;
  const showFooter = true;

  return (
    <div>
      <Header />
    <div className="main-container">
         { showSidebar &&<Sidebar></Sidebar>}
    {showStudents ? (
          <StudentList students={students} />
        ) : (
          <h2>No Students Found</h2>
        )}
    </div>
   <Footer></Footer>
    </div>
  );
}
export default App;