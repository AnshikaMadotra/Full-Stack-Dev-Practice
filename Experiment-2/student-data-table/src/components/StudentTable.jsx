import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
          throw new Error(
            `Request failed with status ${res.status}`
          );
        }

        const data = await res.json();

        const mapped = data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          course: u.company?.name ?? "N/A",
          city: u.address?.city ?? "N/A",
        }));

        setStudents(mapped);
      } catch (err) {
        setError(
          err.message ||
            "Something went wrong while fetching students."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        disabled={loading || !!error}
      />

      {loading && <LoadingSpinner />}

      {!loading && error && (
        <ErrorMessage error={error} />
      )}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty">
                  No students match "{search}"
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.course}</td>
                  <td>{s.city}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

export default StudentTable;