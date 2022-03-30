import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AdminPageVerify from "./components/AdminPageVerify";
import AdminPage from "./components/AdminPage";
import SingleProjectEdit from "./components/projectComponents/SingleProjectEdit";
import SkillEdit from "./components/skillComponents/SkillEdit";
import AddProject from "./components/projectComponents/AddProject";
import AddSkill from "./components/skillComponents/AddSkill";
import EditSingleSkill from "./components/skillComponents/EditSingleSkill";
import AddSkillCatogory from "./components/skillComponents/AddSkillCatogory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects/:id" element={<Projects />} />
        <Route exact path="/adminverify" element={<AdminPageVerify />} />
        <Route exact path="/adminpage" element={<AdminPage />} />
        <Route
          exact
          path="/projects/edit/:id"
          element={<SingleProjectEdit />}
        />
        <Route exact path="/skill/edit/:id" element={<SkillEdit />} />
        <Route exact path="/projects/addproject" element={<AddProject />} />
        <Route exact path="/skill/addskill/:id" element={<AddSkill />} />
        <Route
          exact
          path="/editsingleskill/:id/:DBid"
          element={<EditSingleSkill />}
        />
        <Route exact path="/addskill/catogory" element={<AddSkillCatogory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
