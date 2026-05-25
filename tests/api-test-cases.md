# API Test Cases

## Create Normal Trade

POST /api/trades

```json
{
  "accountId": "ACC1001",
  "symbol": "AAPL",
  "side": "BUY",
  "quantity": 100,
  "price": 192.45,
  "ipAddress": "172.16.1.10"
}
