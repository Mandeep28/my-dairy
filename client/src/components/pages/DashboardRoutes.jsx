import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import FavouriteNotes from "./FavouriteNotes";
import TrashBin from "./TrashBin";
import SettingPage from "./SettingPage";
import Header from "../layout/Header";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const DashboardRoutes = () => {
  return (
    <>  
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/favourite" exact element={<FavouriteNotes />} />
        <Route path="/trashbin" exact element={<TrashBin />} />
        <Route path="/setting" exact element={<SettingPage />} />
        <Route path="/addnote" exact element={<AddNote />} />
        <Route path="/editnote" exact element={<EditNote />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
