# Trade Surveillance System API Documentation

## Base URL
http://localhost:8080/api

http://localhost:8080/api/trades

http://localhost:8080/api/alerts

---

## Get All Trades

GET /trades

Returns a list of all simulated trades.

### Response Example

[
  {
    "id": 1,
    "symbol": "AAPL",
    "volume": 5000,
    "price": 210.45,
    "trader": "TRADER01",
    "timestamp": "2026-05-24T15:30:00"
  }
]

---

## Create Trade

POST /trades

Creates a new simulated trade.

### Request Body

{
  "symbol": "TSLA",
  "volume": 12000,
  "price": 355.10,
  "trader": "TRADER09"
}

---

## Get Alerts

GET /alerts

Returns suspicious trading alerts detected by the system.

### Alert Types

- High volume spike
- Rapid repeated orders
- Suspicious account activity
- Abnormal price movement
