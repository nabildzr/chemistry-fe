import { BrowserRouter as Router, Routes, Route } from "react-router";
import DashboardPage from "./pages/dashboard/page";
import ExpensePage from "./pages/expense/page";
import GoalPage from "./pages/goal/page";
import IncomePage from "./pages/income/page";
import ProfilePage from "./pages/profile/page";
import RecordsPage from "./pages/records/page";
import WalletPage from "./pages/wallet/page";
import AdminPage from "./pages/admin/page";
import CreateUserPage from "./pages/admin/create_user/page";
import EditUserPage from "./pages/admin/data_user/edit_user/page";
import DataUserPage from "./pages/admin/data_user/page";
import NotFoundPage from "./pages/not-found/page";
import LoginPage from "./components/Login";
import NavbarLayout from "./components/Navbar";

function App() {
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));

  return (
    <Router>
      <NavbarLayout/>
      <Routes>
        {isLoggedIn ? (
          <>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/records" element={<RecordsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/create_user" element={<CreateUserPage />} />
        <Route path="/admin/data_user" element={<DataUserPage />} />
        <Route path="/admin/data_user/edit_user" element={<EditUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
          </>
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;