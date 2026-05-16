import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar"
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import TableDashboard from "../components/UI/TableDashboard/TableDashboard";
import FormDashboard from "../components/UI/FormDashboard/FormDashboard";
import { AuthProvider } from "../Context/Context";

function Dashboard() {
  return (
    <>
      <AuthProvider>
        <Navbar adminName="mohamed" />
        <div className="d-flex">
          <Sidebar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<StatusPage />} />



              <Route path="/users" element={<Users />}>
                <Route index element={<TableDashboard name="User" />} />
                <Route path="add" element={<FormDashboard />} />
              </Route>


              <Route path="/projects" element={<Projects />}>
                <Route index element={<TableDashboard name="Project" />} />
                <Route path="add" element={<FormDashboard />} />
              </Route>



            </Routes>
          </main>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Dashboard;
