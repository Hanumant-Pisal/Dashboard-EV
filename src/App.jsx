import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Lazy load components
const KPISection = lazy(() => import("./components/KPISection"));
const TrendChart = lazy(() => import("./components/TrendChart"));
const ComparisonChart = lazy(() => import("./components/ComparisonChart"));
const DataTable = lazy(() => import("./components/DataTable"));

const FallbackLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner-border animate-spin border-4 border-t-4 border-cyan-500 rounded-full w-16 h-16"></div>
  </div>
);

const routes = [
  {
    path: "/overview",
    element: (
      <div>
        <KPISection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TrendChart />
          <ComparisonChart />
        </div>
        <DataTable />
      </div>
    ),
  },
  { path: "/trend", element: <TrendChart /> },
  { path: "/comparison", element: <ComparisonChart /> },
  { path: "/data", element: <DataTable /> },
];

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/overview" />} />
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
