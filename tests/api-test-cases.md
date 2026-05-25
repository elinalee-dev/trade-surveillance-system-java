# API Test Cases

## Create Normal Trade

### Endpoint
POST /api/trades

### Request Body

```json
{
  "accountId": "ACC1001",
  "symbol": "AAPL",
  "side": "BUY",
  "quantity": 100,
  "price": 192.45,
  "ipAddress": "172.16.1.10"
}
```

### Expected Result

- Trade saved successfully
- No alert generated
- Trade appears in database

---

## Create Large Trade Alert

### Endpoint
POST /api/trades

### Request Body

```json
{
  "accountId": "BOT999",
  "symbol": "MSFT",
  "side": "BUY",
  "quantity": 5000,
  "price": 401.22,
  "ipAddress": "172.16.1.44"
}
```

### Expected Result

- HIGH severity alert generated
- Alert type: `ABNORMAL_TRADE_VOLUME`
- Alert stored in alerts table
- Alert displayed on dashboard

---

## Create Suspicious IP Alert

### Endpoint
POST /api/trades

### Request Body

```json
{
  "accountId": "ACC777",
  "symbol": "TSLA",
  "side": "SELL",
  "quantity": 300,
  "price": 250.11,
  "ipAddress": "10.0.0.5"
}
```

### Expected Result

- MEDIUM severity alert generated
- Alert type: `SUSPICIOUS_IP`
- Alert stored in alerts table
- Alert displayed on dashboard

---

## Retrieve All Trades

### Endpoint
GET /api/trades

### Expected Result

- Returns all stored trades
- Response format is JSON array

---

## Retrieve All Alerts

### Endpoint
GET /api/alerts

### Expected Result

- Returns all generated alerts
- Response format is JSON array
- Dashboard updates automatically
