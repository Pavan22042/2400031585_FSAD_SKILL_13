function StudentForm({ formData, editingStudentId, onChange, onSubmit, onReset }) {
  return (
    <section className="card">
      <h2>{editingStudentId ? 'Update Student' : 'Add Student'}</h2>
      <form className="student-form" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Enter student name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter student email"
            required
          />
        </label>

        <label>
          Course
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={onChange}
            placeholder="Enter course"
            required
          />
        </label>

        <div className="button-row">
          <button type="submit">{editingStudentId ? 'Update Student' : 'Add Student'}</button>
          <button type="button" className="ghost-button" onClick={onReset}>
            Clear
          </button>
        </div>
      </form>
    </section>
  )
}

export default StudentForm
