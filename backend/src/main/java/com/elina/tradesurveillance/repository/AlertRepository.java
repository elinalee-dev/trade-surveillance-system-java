package com.elina.tradesurveillance.repository;

import com.elina.tradesurveillance.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertRepository extends JpaRepository<Alert, Long> {
}