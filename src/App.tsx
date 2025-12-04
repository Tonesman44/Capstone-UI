import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ExplorerPage from "./components/ExplorerPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorerPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
