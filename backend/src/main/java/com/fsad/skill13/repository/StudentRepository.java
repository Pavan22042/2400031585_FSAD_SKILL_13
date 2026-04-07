package com.fsad.skill13.repository;

import com.fsad.skill13.model.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class StudentRepository {

    private final ConcurrentHashMap<Long, Student> studentStore = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(0);

    public StudentRepository() {
        save(new Student(null, "Ananya Reddy", "ananya@example.com", "Full Stack"));
        save(new Student(null, "Rahul Kumar", "rahul@example.com", "Spring Boot"));
    }

    public Student save(Student student) {
        if (student.getId() == null) {
            student.setId(idGenerator.incrementAndGet());
        }
        studentStore.put(student.getId(), student);
        return student;
    }

    public List<Student> findAll() {
        List<Student> students = new ArrayList<>(studentStore.values());
        students.sort(Comparator.comparing(Student::getId));
        return students;
    }

    public Optional<Student> findById(Long id) {
        return Optional.ofNullable(studentStore.get(id));
    }

    public void deleteById(Long id) {
        studentStore.remove(id);
    }
}
