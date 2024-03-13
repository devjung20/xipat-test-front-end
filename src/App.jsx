import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import PostManagement from './pages/PostManagement';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';
import Subscription from './pages/chart/Subscription';
import Revenue from './pages/chart/Revenue';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post_management" element={<PostManagement />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
