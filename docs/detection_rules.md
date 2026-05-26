# Detection Rules

## Abnormal Trade Volume Detection

Flags trades with trade quantities greater than or equal to 1000.

### Condition

- quantity >= 1000

### Severity

- HIGH

### Example

A trade submitting 5000 shares of AAPL will generate a HIGH severity alert.

---

## Suspicious IP Detection

Flags trades submitted from suspicious internal IP addresses.

### Condition

- IP address starts with "10."

### Severity

- MEDIUM

### Example

A trade submitted from:

10.0.0.55

will generate a suspicious IP alert.

---

## Potential Market Manipulation Monitoring

The system is designed to simulate surveillance workflows used to identify potentially suspicious market behavior patterns.

### Examples

- unusually large trades
- repeated abnormal activity
- suspicious account behavior

### Future Improvements

Future versions may include:
- rapid order detection
- spoofing detection
- machine learning anomaly detection
- account takeover detection
