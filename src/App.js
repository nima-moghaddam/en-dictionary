import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Layout from "./Ui/Layout/Layout";
import "./styles/base.scss";


function App() {
  return (
    <div className="content">
      <Navbar />
      <main>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </main>
    </div>
  );
}

export default App;
