import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboardregister from "./pages/AdminDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Vendors from "./components/Vendors";
import Orders from "./components/Orders";
import AdminCreditStatus from "./pages/AdminCreditStatus";
import UserDashboard from "./pages/userdashboard/UserDashboard";
// import MyCredit from "./pages/userdashboard/MyCredit";
// import OrdersPlaced from "./pages/userdashboard/OrdersPlaced";
// import InvoiceDownload from "./pages/userdashboard/InvoiceDownload";
import NewOrder from "./components/NewOrder";
import UserCredit from "./components/UserCredit"
import OrderPlaced from "./components/OrderPlaced";
import Invoice from "./components/Invoice";


// Mock function to check if the admin is logged in (expand based on your auth logic)
const isAdminAuthenticated = () => {
  return localStorage.getItem("adminToken") ? true : false;
};

// PrivateRoute Component for Admin Dashboard Protection
const PrivateRoute = ({ children }) => {
  return isAdminAuthenticated() ? (
    children
  ) : (
    <Navigate to="/adminlogin" replace />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Protected Route for Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboardregister />
            </PrivateRoute>
          }
        />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/vendors" element={<Vendors />} />
        <Route path="/admin/status" element={<AdminCreditStatus />} />

        {/* User Dashboard with Nested Routes */}
        <Route path="/dashboard" element={<UserDashboard />}>
          {/* <Route path="my-credit" element={<MyCredit />} /> */}
          {/* <Route path="orders" element={<OrdersPlaced />} /> */}
          {/* <Route path="invoice" element={<InvoiceDownload />} /> */}
          <Route path="neworder" element={<NewOrder />} />
          <Route path="credituser" element={<UserCredit />} />
          <Route path="orders" element={<OrderPlaced />} />
          <Route path="invoice" element={<Invoice />} />





        </Route>

        {/* Fallback Route for Unknown Paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
