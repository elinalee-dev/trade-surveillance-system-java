# Detection Rules

## Volume Spike Detection

Flags trades with unusually large volume compared to average activity.

Condition:
- volume > 10,000

Severity:
- High

---

## Rapid Order Submission

Flags accounts submitting many orders in a short time period.

Condition:
- more than 20 orders within 60 seconds

Severity:
- Medium

---

## Suspicious Login Activity

Flags logins from unknown IP addresses or multiple geographic regions.

Condition:
- login attempts from different locations within short timeframe

Severity:
- High

---

## Price Manipulation Pattern

Detects unusual price fluctuations potentially indicating spoofing or manipulation.

Condition:
- repeated buy/sell cancellations with large spread differences
