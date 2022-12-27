import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Index/Home";
import Layout from "./Ui/Layout/Layout";
import Definition from "./components/Pages/Definition/Definition";

import "./styles/base.scss";

function App() {
  return (
    <div className="content">
      <Navbar />
      <main>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:word" element={<Definition />} />
          </Routes>
        </Layout>
      </main>
    </div>
  );
}

export default App;
