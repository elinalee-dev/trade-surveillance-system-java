# Trade Surveillance Dashboard

A full-stack financial trade monitoring dashboard that simulates real-time surveillance workflows used in trading and fintech environments.

## Features

- Real-time trade monitoring dashboard
- Automated anomaly detection
- Suspicious IP detection
- High-volume trade alerts
- Potential market manipulation alerts
- Interactive charts and analytics
- REST API integration
- PostgreSQL database persistence
- Filtering and search functionality

## Tech Stack

### Frontend
- React
- Vite
- Recharts
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- PostgreSQL

## Alert Detection Logic

The system automatically generates alerts for:
- abnormal trade volume
- suspicious IP addresses
- high-value trades
- potential market manipulation behavior

## API Endpoints

### Trades
- `GET /api/trades`
- `POST /api/trades`

### Alerts
- `GET /api/alerts`

## Example Trade Request

```json
{
  "accountId": "BOT999",
  "symbol": "MSFT",
  "side": "BUY",
  "quantity": 100000,
  "price": 1000,
  "ipAddress": "172.16.9.9"
}
