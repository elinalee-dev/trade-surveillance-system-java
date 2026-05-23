import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchAlerts = () => {
      fetch("http://localhost:8080/api/alerts")
          .then((res) => res.json())
          .then((data) => setAlerts(data));
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 3000);
    return () => clearInterval(interval);

  }, []);

  const getSeverityColor = (severity) => {
    if (severity === "CRITICAL") return "#ff4d4f";
    if (severity === "HIGH") return "#faad14";
    if (severity === "MEDIUM") return "#fadb14";
    return "#d9d9d9";
  };

  const severityCounts = [
    {
      name: "CRITICAL",
      value: alerts.filter((a) => a.severity === "CRITICAL").length,
    },
    {
      name: "HIGH",
      value: alerts.filter((a) => a.severity === "HIGH").length,
    },
    {
      name: "MEDIUM",
      value: alerts.filter((a) => a.severity === "MEDIUM").length,
    },
  ];

  const typeCountsMap = {};

  alerts.forEach((alert) => {
    typeCountsMap[alert.alertType] =
        (typeCountsMap[alert.alertType] || 0) + 1;
  });

  const typeCounts = Object.keys(typeCountsMap).map((key) => ({
    name: key,
    value: typeCountsMap[key],
  }));

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSeverity =
        filter === "ALL" || alert.severity === filter;

    const matchesSearch =
        alert.accountId?.toLowerCase().includes(search.toLowerCase()) ||
        alert.message?.toLowerCase().includes(search.toLowerCase()) ||
        alert.alertType?.toLowerCase().includes(search.toLowerCase());

    return matchesSeverity && matchesSearch;
  });

  return (
      <div
          style={{
            padding: "30px",
            fontFamily: "Arial",
            backgroundColor: "#f5f5f5",
          }}
      >
        <h1 style={{ textAlign: "center" }}>
          Trade Surveillance Dashboard
        </h1>

        <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              justifyContent: "center",
            }}
        >
          {["ALL", "CRITICAL", "HIGH", "MEDIUM"].map((level) => (
              <button
                  key={level}
                  onClick={() => setFilter(level)}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor:
                        filter === level ? "#1890ff" : "#d9d9d9",
                    color: filter === level ? "white" : "black",
                    fontWeight: "bold",
                  }}
              >
                {level}
              </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <input
              type="text"
              placeholder="Search by account ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "12px",
                width: "300px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
          />
        </div>

        <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "30px",
            }}
        >
          <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
          >
            <h2>Total Alerts</h2>
            <h1>{alerts.length}</h1>
          </div>

          <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
          >
            <h2>Critical Alerts</h2>
            <h1>
              {
                alerts.filter((a) => a.severity === "CRITICAL")
                    .length
              }
            </h1>
          </div>
        </div>

        <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "40px",
            }}
        >
          <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
          >
            <h2>Alerts by Severity</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                    data={severityCounts}
                    dataKey="value"
                    outerRadius={100}
                    label
                >
                  {severityCounts.map((entry, index) => (
                      <Cell
                          key={index}
                          fill={getSeverityColor(entry.name)}
                      />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
              style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
          >
            <h2>Alert Types</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={typeCounts}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {filteredAlerts.length === 0 ? (
            <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
            >
              <h3>No alerts found</h3>
            </div>
        ) : (
            filteredAlerts.map((alert, index) => (
                <div
                    key={index}
                    style={{
                      border: "1px solid gray",
                      backgroundColor: getSeverityColor(
                          alert.severity
                      ),
                      padding: "15px",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                >
                  <h3>{alert.alertType}</h3>

                  <p>
                    <strong>Account:</strong> {alert.accountId}
                  </p>

                  <p>
                    <strong>Severity:</strong> {alert.severity}
                  </p>

                  <p>
                    <strong>Message:</strong> {alert.message}
                  </p>
                  <p>
                    <strong>Created:</strong>{" "}
                    {new Date(alert.createdAt).toLocaleString()}
                  </p>
                </div>

            ))
        )}
      </div>
  );
}

export default App;