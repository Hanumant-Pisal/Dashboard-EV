import React from "react";

const DataTable = () => {
  const data = [
    { name: "Hanumant Pisal", region: "North", revenue: "$500" },
    { name: "Virat Kohali", region: "South", revenue: "$400" },
    { name: "Rohit Sharma", region: "East", revenue: "$300" },
    { name: "Hardik Pandya", region: "West", revenue: "$700" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto mt-10">
      <h3 className="text-xl font-semibold mb-4">Revenue by Employee</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Region</th>
            <th className="px-4 py-2 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.region}</td>
              <td className="px-4 py-2">{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
