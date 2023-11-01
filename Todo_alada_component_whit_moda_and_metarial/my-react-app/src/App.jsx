import Modale from "./component/Add/Modale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowData from "./component/ShowData/ShowData";
import EditModal from "./component/EditModal/EditModal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Modale />} />
          <Route path="showData" element={<ShowData />} />
             <Route path="editModal" element={<EditModal />} />

          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
