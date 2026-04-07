function StudentList({ students, loading, onEdit, onDelete }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Student List</h2>
        <span>{students.length} record(s)</span>
      </div>

      {loading ? <p>Loading students...</p> : null}

      {!loading && students.length === 0 ? <p>No students found.</p> : null}

      {!loading && students.length > 0 ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td className="actions">
                    <button type="button" className="small-button" onClick={() => onEdit(student)}>
                      Update
                    </button>
                    <button
                      type="button"
                      className="small-button danger-button"
                      onClick={() => onDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  )
}

export default StudentList
