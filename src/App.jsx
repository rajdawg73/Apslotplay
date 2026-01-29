import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStore } from './hooks/useStore';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MachineDetailPage from './pages/MachineDetailPage';
import MachineFormPage from './pages/MachineFormPage';
import CasinosPage from './pages/CasinosPage';

export default function App() {
  const store = useStore();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage store={store} />} />
          <Route
            path="/machine/:id"
            element={<MachineDetailPage store={store} />}
          />
          <Route
            path="/machine/new"
            element={<MachineFormPage store={store} />}
          />
          <Route
            path="/machine/:id/edit"
            element={<MachineFormPage store={store} />}
          />
          <Route path="/casinos" element={<CasinosPage store={store} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
