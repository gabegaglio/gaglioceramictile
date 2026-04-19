import React from "react";

function StatsBand() {
  const stats = [
    { num: "30", sup: "+", label: "Years Experience" },
    { num: "500", sup: "+", label: "Projects Completed" },
    { num: "100", sup: "%", label: "Quality Guaranteed" },
  ];

  return (
    <div id="stats">
      <div className="container">
        <div className="stats-row">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">
                {s.num}
                <em>{s.sup}</em>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsBand;
