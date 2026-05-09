# Trade Surveillance System

A full-stack fintech and cybersecurity project built with:

- Java
- Spring Boot
- PostgreSQL
- React
- REST APIs

## Overview

This system simulates a real-world trade surveillance platform used in financial institutions to monitor suspicious trading activity and security threats.

The backend analyzes incoming trade activity and automatically generates alerts based on abnormal behavior patterns.

The frontend dashboard displays alerts in real time with severity classifications.

---

## Features

### Trade Monitoring
- Store and process trade transactions
- Analyze incoming trade activity
- Detect abnormal trading behavior

### Security Detection
- Suspicious internal IP detection
- Large trade volume detection
- Potential market manipulation alerts

### Dashboard
- React frontend dashboard
- Severity-based color coding
- Live alert visualization

---

## Tech Stack

### Backend
- Java
- Spring Boot
- PostgreSQL
- Hibernate / JPA

### Frontend
- React
- Vite

---

## Example Alerts

| Alert Type | Severity |
|---|---|
| ABNORMAL_TRADE_VOLUME | HIGH |
| SUSPICIOUS_IP | MEDIUM |
| POTENTIAL_MARKET_MANIPULATION | CRITICAL |

---

## API Endpoints

### Create Trade
POST `/api/trades`

### Get Alerts
GET `/api/alerts`

---

## Future Improvements

- Real-time WebSocket alerts
- Authentication and login system
- Charts and analytics
- Machine learning anomaly detection
- Docker deployment
- Cloud hosting

---

## Author

Elina Lee
