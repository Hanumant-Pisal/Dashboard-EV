import React from "react";

const KPISection = () => {
  const kpis = [
    { title: "Total Revenue", value: "$12,350", trend: "up" },
    { title: "Active Users", value: "1,245", trend: "down" },
    { title: "Conversion Rate", value: "4.5%", trend: "up" },
    { title: "Average Order Value", value: "$45", trend: "up" },
  ];

  return (

  <div>

    <h1 className="font-bold  text-2xl ">Electric Vehicle (EV) population data</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
        >
          <div>
            <p className="text-lg font-semibold">{kpi.title}</p>
            <p className="text-2xl font-bold">{kpi.value}</p>
          </div>
          <div className={`text-2xl ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {kpi.trend === "up" ? "↑" : "↓"}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default KPISection;
