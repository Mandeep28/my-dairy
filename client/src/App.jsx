import "./App.css";

import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import AuthenticateRoutes from "./components/pages/AuthenticateRoutes";
import DashboardRoutes from "./components/pages/DashboardRoutes";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route exact path="/auth/*" element={<AuthenticateRoutes />} />
        <Route exact path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
}

export default App;
