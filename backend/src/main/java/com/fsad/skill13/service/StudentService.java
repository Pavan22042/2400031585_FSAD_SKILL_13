package com.fsad.skill13.service;

import com.fsad.skill13.model.Student;
import com.fsad.skill13.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student addStudent(Student student) {
        student.setId(null);
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Student not found with id " + id));
    }

    public Student updateStudent(Long id, Student updatedStudent) {
        Student existingStudent = getStudentById(id);
        existingStudent.setName(updatedStudent.getName());
        existingStudent.setEmail(updatedStudent.getEmail());
        existingStudent.setCourse(updatedStudent.getCourse());
        return studentRepository.save(existingStudent);
    }

    public void deleteStudent(Long id) {
        getStudentById(id);
        studentRepository.deleteById(id);
    }
}
