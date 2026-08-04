import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  return (
    <div className="page">
      <h1>Student Records</h1>
      <p className="subtitle">
        Fetched live from JSONPlaceholder API
      </p>

      <StudentTable />
    </div>
  );
}

export default App;