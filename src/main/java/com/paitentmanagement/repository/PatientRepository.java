package com.paitentmanagement.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.paitentmanagement.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}