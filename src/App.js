import Head from "./Components/Header.jsx";
import Hom from "./Components/Home.jsx";
import Abt from "./Components/About.jsx";
import Con from "./Components/Contact.jsx";
import Foo from "./Components/Footer.jsx";
import Use from "./Components/User.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Head />
        <Routes>
          <Route path="/" element={<Hom />}></Route>
          <Route path="/about" element={<Abt />}></Route>
          <Route path="/contact" element={<Con />}></Route>
          <Route path="/user/:id" element={<Use />}></Route>
        </Routes>
        <Foo />
      </>
    </Router>
  );
}

export default App;
