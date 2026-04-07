import { useEffect, useState } from 'react'
import axios from 'axios'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
const API_URL = `${API_BASE_URL}/students`

const emptyForm = {
  name: '',
  email: '',
  course: '',
}

function App() {
  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState(emptyForm)
  const [editingStudentId, setEditingStudentId] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setStudents(response.data)
      setError('')
    } catch (err) {
      setError('Unable to load students. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const resetForm = () => {
    setFormData(emptyForm)
    setEditingStudentId(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (editingStudentId) {
        await axios.put(`${API_URL}/${editingStudentId}`, formData)
      } else {
        await axios.post(API_URL, formData)
      }
      resetForm()
      fetchStudents()
    } catch (err) {
      setError('Unable to save student. Please check the form and try again.')
    }
  }

  const handleEdit = (student) => {
    setEditingStudentId(student.id)
    setFormData({
      name: student.name,
      email: student.email,
      course: student.course,
    })
    setError('')
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      if (editingStudentId === id) {
        resetForm()
      }
      fetchStudents()
    } catch (err) {
      setError('Unable to delete the selected student.')
    }
  }

  return (
    <div className="page">
      <div className="hero">
        <p className="eyebrow">Skill 13</p>
        <h1>Deployment Ready Student Management</h1>
        <p className="subtitle">Configured for development and production builds using environment variables.</p>
      </div>

      <div className="content-grid">
        <StudentForm
          formData={formData}
          editingStudentId={editingStudentId}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={resetForm}
        />

        <StudentList
          students={students}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {error ? <p className="error-banner">{error}</p> : null}
    </div>
  )
}

export default App
