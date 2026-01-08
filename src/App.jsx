import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SmartPanels from './pages/SmartPanels';
import CbseAffiliation from './pages/CbseAffiliation';
import SchoolAuditing from './pages/SchoolAuditing';
import SchoolUniforms from './pages/SchoolUniforms';
import SchoolStationery from './pages/SchoolStationery';
import SchoolAdvertising from './pages/SchoolAdvertising';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-panels" element={<SmartPanels />} />
        <Route path="/cbse-affiliation" element={<CbseAffiliation />} />
        <Route path="/auditing" element={<SchoolAuditing />} />
        <Route path="/uniforms" element={<SchoolUniforms />} />
        <Route path="/stationery" element={<SchoolStationery />} />
        <Route path="/advertising" element={<SchoolAdvertising />} />
      </Routes>
    </Layout>
  );
}

export default App;
