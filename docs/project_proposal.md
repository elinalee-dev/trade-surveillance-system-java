# Trade Surveillance System Project Proposal

## Project Overview

The goal of this project is to build a trade surveillance platform that simulates financial trading activity and detects suspicious or potentially fraudulent behavior.

The system will monitor simulated trade orders, login attempts, and account activity to identify anomalies such as abnormal trade volume, suspicious IP activity, brute force login attempts, and possible account takeover behavior.

This project combines concepts from software engineering, cybersecurity, financial systems, and risk monitoring.

---

## Features

- Simulate trading activity and orders
- Store transaction and login data in PostgreSQL
- REST API endpoints for trade and alert management
- Detect suspicious behavior using rule-based anomaly detection
- Generate alerts based on security and risk events
- Display alerts and monitoring statistics on a simple dashboard

---

## Technologies and Tools

### Backend
- Java
- Spring Boot
- Spring Data JPA

### Database
- PostgreSQL

### APIs
- REST APIs

### Frontend
- HTML
- CSS
- JavaScript

### Tools
- Git
- GitHub
- Maven
- Postman

---

## Detection Rules

The system will detect:

1. Abnormal trade volume
2. Excessive orders within short time periods
3. Suspicious IP activity
4. Login brute force attempts
5. Potential account takeover patterns

---

## Project Goals

### Minimum Goals
- Create a backend system that stores simulated trading activity
- Build REST APIs for trades and alerts
- Implement basic anomaly detection rules

### Expected Goals
- Create a monitoring dashboard
- Add advanced alert generation logic
- Simulate realistic trade activity patterns

### Future Goals
- Real-time monitoring using WebSockets
- Machine learning anomaly detection
- JWT authentication and authorization
- Role-based access control

---

## Deliverables

- Full GitHub repository
- Backend API system
- PostgreSQL database integration
- Monitoring dashboard
- Documentation and final report
- Screenshots and architecture diagrams
