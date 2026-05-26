# Detection Rules

### Severity Levels

- CRITICAL: Potential market manipulation or extremely high-risk trading behavior
- HIGH: Abnormal trade volume where quantity is greater than or equal to 1000
- MEDIUM: Suspicious internal IP address activity

---

## Potential Market Manipulation Detection

Flags extremely large or high-value trades that may indicate suspicious market behavior.

### Condition

- trade quantity is significantly above the 1000-unit threshold
- trade value is unusually high
- suspicious repeated activity from the same account

### Severity

- CRITICAL

### Example

A trade with an unusually large quantity or high total value may generate a CRITICAL severity alert.

---

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
