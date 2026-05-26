# Trade Surveillance System Project Proposal

## Project Overview

The Trade Surveillance System is a full-stack web application designed to simulate financial transaction monitoring and cybersecurity risk detection. The system ingests simulated trade orders, processes them through a rule-based anomaly detection engine, and surfaces alerts on a real-time monitoring dashboard.
This project combines concepts from software engineering, cybersecurity, financial systems, and risk management, making it applicable to roles in fintech, compliance technology, and security operations.

---

## Features

- Submit and store simulated trade orders via REST API
- Rule-based anomaly detection engine that runs automatically on each trade
- Generate and persist alerts categorized by type and severity (CRITICAL / HIGH / MEDIUM)
- Filter and search alerts by account ID, severity, or alert type
- Interactive dashboard with charts showing alert distributions and trends
- PostgreSQL-backed persistence for trades and alerts


---

## Technologies and Tools

### Backend
- Java 17
- Spring Boot
- Spring Data JPA

### Database
- PostgreSQL

### APIs
- REST APIs

### Frontend
- HTML
- CSS
- React (JavaScript)

### Tools
- Git
- GitHub
- Maven
- Postman

---

## Detection Rules

The system will detect:

1. Abnormal Trade Volume — trade quantity exceeds 1,000 units (configurable threshold)
2. Potential Market Manipulation — extremely large, high-value trade that could artificially move markets
3. Suspicious IP Address — trade or login originates from a flagged or internal IP range

---

## Project Goals

### Minimum Goals
- Create a backend system that stores simulated trading activity
- Build REST APIs for trades and alerts
- Implement basic anomaly detection rules

### Expected Goals
- Add all 3 detection rules
- Build React dashboard with filtering, pie chart, and bar chart
- Connect frontend to live backend API.

### Future Goals
- Real-time alert streaming via WebSockets
- JWT authentication and role-based access control
- Machine learning anomaly detection
- Containerization with Docker.

---

## Deliverables

- Full GitHub repository with README and setup instructions
- Spring Boot backend with REST API and anomaly detection engine
- PostgreSQL schema and seed data
- React dashboard with live alert feed, charts, and severity filters
- API documentation (separate document)
- Final report

## Environment Setup Summary

### Requirements
- Java 17
- Maven
- Node.js (v18 or later)
- PostgreSQL

### Backend
Navigate to the backend/ directory and run:
./mvnw spring-boot:run
Server runs at http://localhost:8080

### Frontend
Navigate to the frontend/ directory and run:
npm install && npm run dev
App runs at http://localhost:5173

### Database
Create a PostgreSQL database named tradesurveillance and update src/main/resources/application.properties with your credentials.

